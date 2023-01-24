import { useState } from 'react'
import { 
    DropdownContainer,
    DepartmentsMenu,
    DepartmentsDropDown
} from './styles'

import config from '../../../../../config.json'


const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <DropdownContainer
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}>
        <DepartmentsMenu>
            <p>Departamentos</p>
        </DepartmentsMenu>
        {showDropdown && <DepartmentsDropDown>
            <ul>
                {config.departments.map((department) => <li key={department.id}><a href={`/category/${department.name.toLowerCase()}`}>{department.name}</a></li>)}
            </ul>
        </DepartmentsDropDown> }
    </DropdownContainer>
  )
}

export { Dropdown }
