<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const scriptURL = 'https://script.google.com/macros/s/AKfycbxpwTVvMSJo0e7EjwfHRvgL8pQpddUGbybZrqTxhjF4WWZ3cWA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })</script>
<!-- end Simple Custom CSS and JS -->
