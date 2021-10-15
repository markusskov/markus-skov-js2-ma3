export default function alert(cssClass, errorMessage) {
  document.querySelector('.alert').innerHTML = `<div class="alert  ${cssClass}">
      ${errorMessage}
    </div>`;
}
