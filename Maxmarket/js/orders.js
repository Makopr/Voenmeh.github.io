const orders = [];
const history = [];
let editedOrderIndex = -1;

let nextOrderId = 2;

function renderOrders(filteredOrders = orders) {
  const tableBody = document.querySelector('#ordersTable tbody');
  tableBody.innerHTML = '';

  for (const [index, order] of filteredOrders.entries()) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="background">${order.orderId}</td>
      <td class="font">${order.orderName}</td>
      <td>${order.amount}</td>
      <td>${order.client}</td>
      <td class="big">${order.time}</td>
      <td>${order.comment}</td>
      <td>
        <button onclick="renameOrder('${order.orderName}')">Переименовать</button>
        <button onclick="deleteOrder('${order.orderName}')">Удалить</button>
        <button onclick="closeOrder('${order.orderName}')">Закрыть</button>
        <button onclick="showEditForm(${index})">Изменить</button>
      </td>
    `;
    tableBody.appendChild(row);
  }
}

function renderHistory() {
  const historyTableBody = document.querySelector('#historyTable tbody');
  historyTableBody.innerHTML = '';

  for (const order of history) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="background">${order.orderId}</td>
      <td class="font">${order.orderName}</td>
      <td>${order.amount}</td>
      <td>${order.client}</td>
      <td class="big">${order.time}</td>
      <td>${order.comment}</td>
    `;
    historyTableBody.appendChild(row);
  }
}

function showAddOrderForm() {
  document.querySelector('#addOrderForm').style.display = 'block';
}

function addOrder() {
  const orderName = document.querySelector('#orderName').value;
  const amount = document.querySelector('#amount').value;
  const client = document.querySelector('#client').value;
  const time = document.querySelector('#time').value;
  const comment = document.querySelector('#comment').value;
  if (validateOrder(cardNumber, orderName, amount, client, time)) {
    const newOrder = { orderId: nextOrderId, cardNumber, orderName, amount, client, time, comment };
    orders.push(newOrder);
    renderOrders();
    resetAddOrderForm();
    nextOrderId++;
  }
}

function resetAddOrderForm() {
  document.querySelector('#orderName').value = '';
  document.querySelector('#amount').value = '';
  document.querySelector('#client').value = '';
  document.querySelector('#time').value = '';
  document.querySelector('#comment').value = '';
  document.querySelector('#addOrderForm').style.display = 'none';
  clearErrorMessages();
}

function validateOrder(cardNumber, orderName, amount, client, time, isEditForm = false) {
  clearErrorMessages();

  const amountRegex = /^\d+$/;
  const clientRegex = /^[a-zA-Zа-яА-Я\s]+$/;
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

  let isValid = true;

  if (!amountRegex.test(amount)) {
    displayErrorMessage(isEditForm ? 'editAmountError' : 'amountError', 'Сумма должна быть числом.');
    isValid = false;
  }

  if (!clientRegex.test(client)) {
    displayErrorMessage(isEditForm ? 'editClientError' : 'clientError', 'Имя клиента должно содержать только буквы.');
    isValid = false;
  }

  if (!timeRegex.test(time)) {
    displayErrorMessage(isEditForm ? 'editTimeError' : 'timeError', 'Введите время в формате HH:mm.');
    isValid = false;
  }

  return isValid;
}


function displayErrorMessage(elementId, message) {
  const errorMessageElement = document.querySelector(`#${elementId}`);
  errorMessageElement.textContent = message;
}

function clearErrorMessages() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => element.textContent = '');
}

function searchOrders() {
  const searchInput = document.querySelector('#searchInput').value.toLowerCase();
  const filteredOrders = orders.filter(order =>
    order.cardNumber.toLowerCase().includes(searchInput) ||
    order.orderName.toLowerCase().includes(searchInput) ||
    order.client.toLowerCase().includes(searchInput)
  );
  renderOrders(filteredOrders);
}

function renameOrder(orderName) {
  const newOrderName = prompt('Введите новое имя заказа:');
  const order = orders.find(order => order.orderName === orderName);
  if (order && newOrderName) {
    order.orderName = newOrderName;
    renderOrders();
  }
}

function deleteOrder(orderName) {
  const index = orders.findIndex(order => order.orderName === orderName);
  if (index !== -1) {
    orders.splice(index, 1);
    renderOrders();
    nextOrderId--;
  }
}

function closeOrder(orderName) {
  const orderIndex = orders.findIndex(order => order.orderName === orderName);
  if (orderIndex !== -1) {
    const closedOrder = orders.splice(orderIndex, 1)[0];
    history.push(closedOrder);
    renderOrders();
    renderHistory();
  }
}

function showEditForm(index) {
  const order = orders[index];
  document.querySelector('#editOrderName').value = order.orderName;
  document.querySelector('#editAmount').value = order.amount;
  document.querySelector('#editClient').value = order.client;
  document.querySelector('#editTime').value = order.time;
  document.querySelector('#editComment').value = order.comment;
  editedOrderIndex = index;
  document.querySelector('#editForm').style.display = 'block';
}

function Save() {
  if (editedOrderIndex !== -1) {
    const order = orders[editedOrderIndex];
    order.orderName = document.querySelector('#editOrderName').value;
    order.amount = document.querySelector('#editAmount').value;
    order.client = document.querySelector('#editClient').value;
    order.time = document.querySelector('#editTime').value;
    order.comment = document.querySelector('#editComment').value;

    if (validateOrder(order.cardNumber, order.orderName, order.amount, order.client, order.time, true)) {
      renderOrders();
      document.querySelector('#editForm').style.display = 'none';
      editedOrderIndex = -1;
    }
  }
}

function showHistory() {
  const historyTable = document.querySelector('#historyTable');
  if (historyTable.style.display === 'none') {
    historyTable.style.display = 'table';
  } else {
    historyTable.style.display = 'none';
  }
}

orders.push({
  orderId: '1',
  orderName: 'Бургер',
  amount: '452',
  client: 'Максим Никл',
  time: '10:51',
  comment: 'Без булок'
});

renderOrders();