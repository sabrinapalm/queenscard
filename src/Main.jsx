import { useReducer } from 'react'
import './Main.css'
import {
  CARD_NUMBER,
  CARD_NAME,
  CARD_TYPE,
  EXPIRY_MONTH,
  EXPIRY_YEAR,
  CVV,
  UPDATE,
  ERROR,
  SUBMIT,
  SUCCESS,
  FILL_FORM,
} from './constants/formConstants'
import {
  monthOptions,
  yearOptions,
  initialFormState,
} from './components/form/formOptions.js'
import {
  isNumberKey,
  isLetterKey,
  validateForm,
  checkCardType,
} from './utils/formUtils'
import formReducer from './reducers/formReducer'
import CreditCard from './components/credit-card/CreditCard'
import Form from './components/form/Form'
import Input from './components/input/Input'
import Select from './components/select/Select'

const addClassName = () => {
  const card = document.querySelector('.rotate-card-inner')
  card.classList.add('rotate-card-transform')
}

const removeClassName = () => {
  const card = document.querySelector('.rotate-card-inner')
  card.classList.remove('rotate-card-transform')
}

const Main = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const handleChange = ({ target: { name, value } }) => {
    if (formState.errors[name]) {
      delete formState.errors[name]
    }

    if (name === CARD_NUMBER) {
      updateCardType(value)
      value = value
        .replace(/\W/gi, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
    }

    dispatch({ type: UPDATE, value, name })
  }

  const updateCardType = (value) =>
    dispatch({
      type: UPDATE,
      value: checkCardType(value) ?? '',
      name: CARD_TYPE,
    })

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({ type: SUBMIT })

    const errors = validateForm(formState)
    if (Object.keys(errors).length > 0) {
      dispatch({ type: ERROR, value: errors })
      return
    }

    setTimeout(() => {
      dispatch({ type: SUCCESS })
    }, 1500)
  }

  const fillForm = () => dispatch({ type: FILL_FORM })

  return (
    <main>
      <button
        onClick={fillForm}
        className="form-submit-button fill-form-button"
      >
        Fill form
      </button>
      <div className="wrapper">
        <CreditCard
          cardName={formState.cardName}
          cardNumber={formState.cardNumber}
          cardType={formState.cardType}
          cvv={formState.cvv}
          expiryMonth={formState.expiryMonth}
          expiryYear={formState.expiryYear}
          onMouseEnter={addClassName}
          onMouseLeave={removeClassName}
        />
        <Form
          isLoading={formState.isLoading}
          isSuccess={formState.isSubmitted}
          onSubmit={handleSubmit}
        >
          <Input
            errorMessage={formState.errors.cardNumber}
            handleChange={handleChange}
            id={CARD_NUMBER}
            isRequired
            label="Card number"
            maxLength={19}
            onKeyPress={isNumberKey}
            type="text"
            value={formState.cardNumber}
          />
          <Input
            errorMessage={formState.errors.cardName}
            handleChange={handleChange}
            id={CARD_NAME}
            isRequired
            label="Card name"
            onKeyPress={isLetterKey}
            type="text"
            value={formState.cardName}
          />
          <div className="flex-wrapper">
            <Select
              defaultValue=""
              errorMessage={formState.errors.expiryMonth}
              handleChange={handleChange}
              id={EXPIRY_MONTH}
              isRequired
              label="Expiry date"
              options={monthOptions}
              placeholder="MM"
              value={formState.expiryMonth}
            />
            <Select
              defaultValue=""
              errorMessage={formState.errors.expiryYear}
              handleChange={handleChange}
              id={EXPIRY_YEAR}
              isRequired
              options={yearOptions}
              placeholder="YYYY"
              value={formState.expiryYear}
            />
            <Input
              errorMessage={formState.errors.cvv}
              handleChange={handleChange}
              id={CVV}
              isRequired
              label="CVV/CVC"
              maxLength={4}
              onBlur={removeClassName}
              onFocus={addClassName}
              onKeyPress={isNumberKey}
              type="tel"
              value={formState.cvv}
            />
          </div>
        </Form>
      </div>
    </main>
  )
}

export default Main
