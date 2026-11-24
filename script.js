const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const viewer = document.getElementById('gallery-viewer');
const screenshots = Array.from(document.querySelectorAll('[data-gallery]'));

if (viewer && typeof viewer.showModal === 'function' && screenshots.length) {
  const image = document.getElementById('viewer-image');
  const count = document.getElementById('viewer-count');
  const title = document.getElementById('viewer-title');
  const error = document.getElementById('viewer-error');
  const original = document.getElementById('viewer-original');
  const close = viewer.querySelector('.viewer-close');
  let index = 0;
  let trigger = null;
  let previousOverflow = '';

  function showScreenshot(nextIndex) {
    index = (nextIndex + screenshots.length) % screenshots.length;
    const source = screenshots[index];
    error.hidden = true;
    image.hidden = false;
    image.alt = source.querySelector('img')?.alt.replace(/^Open screenshot: /, '') || `Anii! Grow to Know gameplay screenshot ${index + 1}`;
    image.src = source.href;
    original.href = source.href;
    title.textContent = `Anii! Grow to Know / Screenshot ${index + 1}`;
    count.textContent = `${index + 1} / ${screenshots.length}`;
  }

  image.addEventListener('error', () => {
    image.hidden = true;
    error.hidden = false;
  });

  screenshots.forEach((link, position) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      previousOverflow = document.body.style.overflow;
      showScreenshot(position);
      viewer.showModal();
      document.body.style.overflow = 'hidden';
      close.focus();
    });
  });

  close.addEventListener('click', () => viewer.close());
  document.getElementById('viewer-prev').addEventListener('click', () => showScreenshot(index - 1));
  document.getElementById('viewer-next').addEventListener('click', () => showScreenshot(index + 1));

  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      viewer.close();
      return;
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      showScreenshot(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  viewer.addEventListener('click', (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      viewer.close();
    }
  });

  viewer.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    trigger?.focus({ preventScroll: true });
  });
}
