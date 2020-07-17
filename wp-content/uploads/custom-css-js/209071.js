<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYtiKbZEzM1I4mHtYnJ6A88pAmtqAsRyuiOAbhVA-g1_E-grpr/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })</script>
<!-- end Simple Custom CSS and JS -->
