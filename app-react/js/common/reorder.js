import ReactDom from 'react-dom';
import Dragula from 'react-dragula';

export default function reorder(updateAction, className) {
  const dragula = Dragula([ReactDom.findDOMNode(this)], {
    moves(el, container, handle) {
    return handle.classList.contains(className);
    }
  });

  dragula.on('drop', (el, target, source, sibling) => {
    const pos = sibling ? parseInt(sibling.dataset.pos) : target.childNodes.length;
    updateAction(el.dataset.path, pos);
    target.childNodes.forEach((el, i) => {
      el.dataset.pos = i;
    });
  });
}
