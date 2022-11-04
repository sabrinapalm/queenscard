import { UPDATE, ERROR, FILL_FORM, SUBMIT, SUCCESS } from '../constants/formConstants';
import { initialFormState, filledFormState } from '../components/form/formOptions';

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                [action.name]: action.value,
                isSubmitted: false,
            };
        case ERROR: {
            return {
                ...state,
                errors: { ...action.value },
                isLoading: false,
                isSubmitted: false,
            };
        }
        case SUBMIT: {
            return {
                ...state,
                isLoading: true,
                isSubmitted: false,
            };
        }
        case SUCCESS: {
            return {
                ...initialFormState,
                isLoading: false,
                isSubmitted: true,
            };
        }
        case FILL_FORM: {
            return { ...filledFormState };
        }
        default:
            return state;
    }
};

export default formReducer;
