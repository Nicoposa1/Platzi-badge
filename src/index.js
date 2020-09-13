import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './Global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
<Badge 
  firstName= "Nicolás"
  lastName = "Posa"
  jobTittle= "Frontend Engineer"
  twitter= "nicoposa1"
  avatarUrl= "https://es.gravatar.com/userimage/192994403/013c21725ee2b66b21941e678d3bb965.jpg"
/>, 
container)