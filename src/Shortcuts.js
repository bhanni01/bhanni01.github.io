import { useEffect, useRef } from 'react';

// Keyboard shortcuts. Nothing on the page mentions them: pressing ? opens
// this list, the way gmail does it.
//   1-9   a section, by its number in the outline
//   a-z   a project, by its letter in the list
//   ?     open or close the list

const letter = (index) => String.fromCharCode(97 + index);

function isTyping(target) {
  return (
    target.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
  );
}

function jumpTo(id, isProject) {
  const target = document.getElementById(id);
  if (!target) return;

  // reading the layout here also resets the highlight, so pressing the
  // same letter twice plays it again
  target.classList.remove('flash');
  const { top, bottom } = target.getBoundingClientRect();

  if (!isProject) {
    target.scrollIntoView({ block: 'start' });
  } else if (top < 0 || bottom > window.innerHeight) {
    target.scrollIntoView({ block: 'center' });
  }
  // so the next Tab continues from here
  target.focus({ preventScroll: true });

  if (isProject) {
    target.classList.add('flash');
    target.addEventListener(
      'animationend',
      () => target.classList.remove('flash'),
      { once: true }
    );
  }
}

function Shortcuts({ sections, projects }) {
  const dialog = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing)
        return;
      if (isTyping(event.target)) return;

      const list = dialog.current;
      if (event.key === '?') {
        event.preventDefault();
        if (list.open) {
          list.close();
        } else {
          list.showModal();
          // showModal focuses the close button, which draws a focus ring on
          // open. start on the list itself; Tab still reaches the button.
          body.current.focus();
        }
        return;
      }

      const key = event.key.toLowerCase();
      let id;
      let isProject = false;
      if (/^[1-9]$/.test(key)) {
        id = sections[key - 1]?.id;
      } else if (/^[a-z]$/.test(key) && !event.shiftKey) {
        id = projects[key.charCodeAt(0) - 97]?.id;
        isProject = true;
      }
      if (!id) return;

      event.preventDefault();
      if (list.open) list.close();
      jumpTo(id, isProject);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [sections, projects]);

  return (
    <dialog
      ref={dialog}
      className="shortcuts"
      aria-labelledby="shortcuts-title"
      onClick={(event) => {
        // a click on the backdrop lands on the dialog itself
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="shortcuts-body" ref={body} tabIndex={-1}>
        <header className="running-head">
          <h2 id="shortcuts-title">keyboard shortcuts</h2>
          <button type="button" onClick={() => dialog.current.close()}>
            close
          </button>
        </header>
        <dl>
          {sections.map((section, index) => (
            <div key={section.id}>
              <dt>
                <kbd>{index + 1}</kbd>
              </dt>
              <dd>{section.title}</dd>
            </div>
          ))}
          <div>
            <dt>
              <kbd>a</kbd> to <kbd>{letter(projects.length - 1)}</kbd>
            </dt>
            <dd>the project with that letter</dd>
          </div>
          <div>
            <dt>
              <kbd>?</kbd>
            </dt>
            <dd>open or close this list</dd>
          </div>
          <div>
            <dt>
              <kbd>esc</kbd>
            </dt>
            <dd>close</dd>
          </div>
        </dl>
      </div>
    </dialog>
  );
}

export default Shortcuts;
