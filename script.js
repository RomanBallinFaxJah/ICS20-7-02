document.getElementById('button').addEventListener('click', check)


function check () {
  number = parseInt(document.getElementById('val1').value)
  if (number > 0) {
    alert('This number is positive')
  } else {
    alert('This number is negative')
  }
}
