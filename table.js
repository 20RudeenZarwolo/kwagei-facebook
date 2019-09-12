var contactList = {
  contacts: [],

  displayContactsTable: function(){
    var tableBody = document.getElementById('tablebody')
    tableBody.innerHTML = ""

    for(i=0; i < this.contacts.length; i++){
      tableBody.innerHTML += 
      `
        <tr>
        <td>${i+1}</td>
        <td>${this.contacts[i].firstname}</td>
        <td>${this.contacts[i].lastname}</td>
        <td>${this.contacts[i].contact}</td>
        </tr>
      `;
      console.log(tableBody)
    }  
  },
  
  addContact: function(firstName, lastName, contact){
    this.contacts.push({
      firstname: firstName,
      lastname: lastName,
      contact: contact 
    })
    console.log(this.contacts)
  },
  
}

var handler = {
  displayAddContactInput: function (){
    var displayContactInputButton = document.getElementById('addContactContainer')
    if (displayContactInputButton.style.display === 'none'){
      displayContactInputButton.style.display = 'block'
    }else{
      displayContactInputButton.style.display = 'none'
    }
  },

  addContact: function(){
    var firstName = document.getElementById('firstname')
    var lastName = document.getElementById('lastname')
    var contact = document.getElementById('contact')
    contactList.addContact(firstName.value, lastName.value, contact.value)
    contactList.displayContactsTable()

  }
}

