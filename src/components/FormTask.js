import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import SelectTask from '../UI/SelectTask'

function FormTask({ newTask, type, tasks, jumpTask, title }) {
  const [text, setText] = useState('')
  const [activeInput, setActiveInput] = useState(false)
  const [valueSelect, setValueSelect] = useState({ value: null, id: null })

  const activeInputHandle = (event) => {
    event.preventDefault()
    setActiveInput(!activeInput)
  }

  const submitInputHandle = (event) => {
    event.preventDefault()
    if (text) {
      newTask(text)
      setText('')
      setActiveInput(!activeInput)
    }
  }

  const selectOptions = tasks.map((task) => {
    if (task.section === type) {
      return { value: task.text, label: task.text, id: task.id }
    }
  })

  const submitSelectHandle = (event) => {
    event.preventDefault()
    const id = valueSelect.id
    if (valueSelect.value) {
      jumpTask(id, title)
      setActiveInput(!activeInput)
    }
  }

  return activeInput ? (
    type === 'start' ? (
      <>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={submitInputHandle}>Submit</Button>
      </>
    ) : (
      <>
        <SelectTask
          options={selectOptions}
          defaultValue={valueSelect.value}
          onChange={({ value, id }) => {
            setValueSelect({ value, id })
          }}
        />
        <Button onClick={submitSelectHandle}>Submit</Button>
      </>
    )
  ) : (
    <Button
      onClick={activeInputHandle}
      disabled={
        !(type === 'start') &&
        !tasks.filter((task) => task.section === type).length
      }
    >
      +Add card
    </Button>
  )
}

export default FormTask
