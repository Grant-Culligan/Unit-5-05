let number = 0

document.getElementById('btn').addEventListener('click', add)

function add () {
  number = document.getElementById('input').value
  number = parseInt(number)
  number = number * number
  alert(number)
}
