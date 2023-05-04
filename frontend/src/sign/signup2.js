// import loc from './images/location.svg'
import Footer from "../shared/Footer";
// import pharma from './images/pharma.png'
// import medicine from './images/medicine.png'
import './signup2.css';
import Header from "../shared/Header";

const signUp2 = () => {
    return ( 
        <>
        <Header/>
        
        <div className="iNkA">
  <div className="_2sJ6">
    <div className="_1zI6">
      <span className="Ges9">Start by confirming personal info</span>
      <span className="_1ns7">
        Check your information to prepare your existing and future prescriptions
        for delivery.
      </span>
    </div>
  </div>
  <div className="_2sJ6">
    <div className="_1Zcy">
      <div />
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
          >
            Legal first name
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
            <input
              aria-invalid="false"
              autoComplete="given-name"
              name="fname"
              type="text"
              className="MuiInputBase-input MuiOutlinedInput-input"
              defaultValue=""
            />
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Legal first name</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
          >
            Legal last name
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
            <input
              aria-invalid="false"
              autoComplete="family-name"
              name="lname"
              type="text"
              className="MuiInputBase-input MuiOutlinedInput-input"
              defaultValue=""
            />
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Legal last name</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
          >
            Email address
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
            <input
              aria-invalid="false"
              autoComplete="email"
              name="email"
              type="email"
              className="MuiInputBase-input MuiOutlinedInput-input"
              defaultValue=""
            />
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Email address</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
          >
            Mobile phone number
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
            <input
              aria-invalid="false"
              type="tel"
              className="MuiInputBase-input MuiOutlinedInput-input"
              defaultValue=""
            />
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Mobile phone number</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
          >
            Date of birth
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
            <input
              aria-invalid="false"
              type="text"
              className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
              defaultValue=""
            />
            <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
              <button
                className="MuiButtonBase-root MuiIconButton-root"
                tabIndex={0}
                type="button"
              >
                <span className="MuiIconButton-label">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
            </div>
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Date of birth</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div
          className="MuiAutocomplete-root MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon"
          role="combobox"
          aria-expanded="false"
          aria-label="Enter your delivery address"
          style={{ width: "100%" }}
        >
          <div className="MuiFormControl-root MuiTextField-root jss21 MuiFormControl-fullWidth">
            <label
              className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
              data-shrink="false"
              htmlFor="google-map-demo"
              id="google-map-demo-label"
            >
              Address
            </label>
            <div className="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
              <textarea
                rows={1}
                aria-invalid="false"
                autoComplete="off"
                id="google-map-demo"
                className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                aria-autocomplete="both"
                autoCapitalize="none"
                spellCheck="false"
                style={{ height: 20, overflow: "hidden" }}
                defaultValue={""}
              />
              <textarea
                aria-hidden="true"
                className="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                readOnly=""
                tabIndex={-1}
                style={{
                  visibility: "hidden",
                  position: "absolute",
                  overflow: "hidden",
                  height: 0,
                  top: 0,
                  left: 0,
                  transform: "translateZ(0px)",
                  width: "402.737px"
                }}
                defaultValue={""}
              />
              <div className="MuiAutocomplete-endAdornment">
                <button
                  className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator"
                  tabIndex={-1}
                  type="button"
                  aria-label="Clear"
                  title="Clear"
                >
                  <span className="MuiIconButton-label">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </span>
                  <span className="MuiTouchRipple-root" />
                </button>
                <button
                  className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator"
                  tabIndex={-1}
                  type="button"
                  aria-label="Open"
                  title="Open"
                >
                  <span className="MuiIconButton-label">
                    <svg
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </div>
              <fieldset
                aria-hidden="true"
                className="jss22 MuiOutlinedInput-notchedOutline"
              >
                <legend className="jss24">
                  <span>Address</span>
                </legend>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="_32EM">
        <div className="MuiFormControl-root MuiTextField-root jss21">
          <label
            className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
            data-shrink="false"
            htmlFor="line2"
            id="line2-label"
          >
            Apartment # or Suite (optional)
          </label>
          <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
            <input
              aria-invalid="false"
              id="line2"
              type="text"
              className="MuiInputBase-input MuiOutlinedInput-input"
              defaultValue=""
            />
            <fieldset
              aria-hidden="true"
              className="jss22 MuiOutlinedInput-notchedOutline"
            >
              <legend className="jss24">
                <span>Apartment # or Suite (optional)</span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="_11W9">
        <button type="button" className="_1A24 _3pZY">
          <div className="_10w2">
            <span
              className="MuiButtonBase-root MuiIconButton-root jss29 MuiCheckbox-root jss26 _2OOZ"
              aria-disabled="false"
            >
              <span className="MuiIconButton-label">
                <input
                  className="jss32"
                  type="checkbox"
                  data-indeterminate="false"
                  defaultValue=""
                />
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
              </span>
            </span>
          </div>
          <span className="_1ARV">
            I agree to let NimbleRx collect personal data about me, as well as
            certain medical information, used to support fulfillment and
            delivery of my prescriptions in accordance with HIPAA requirements.
            This data may also be used to support ads.
          </span>
        </button>
        <button type="button" className="_1A24 _3pZY">
          <div className="_10w2">
            <span
              className="MuiButtonBase-root MuiIconButton-root jss29 MuiCheckbox-root jss26 _2OOZ"
              aria-disabled="false"
            >
              <span className="MuiIconButton-label">
                <input
                  className="jss32"
                  type="checkbox"
                  data-indeterminate="false"
                  defaultValue=""
                />
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
              </span>
            </span>
          </div>
          <span className="_1ARV">
            I agree to receive text messages from NimbleRx. Msg &amp; data rates
            may apply. Message frequency varies. Reply HELP for help or STOP to
            cancel.
          </span>
        </button>
      </div>
      <div className="_2IVB">
        <div className="pb8 pt8">
          <span className="_1FLD">
            <div>
              <span className="ay9k">
                <span>By clicking “Confirm” you agree to NimbleRx’s </span>
                <a className="_4glg _2XP5" href="/terms" target="_blank">
                  Terms of Use
                </a>
                <span>, </span>
                <a className="_4glg _2XP5" href="/privacy" target="_blank">
                  Privacy Policy
                </a>
                <span>, </span>
                <a className="_4glg _2XP5" href="/hipaa" target="_blank">
                  HIPAA Policy
                </a>
                <span>, and </span>
                <a
                  className="_4glg _2XP5"
                  href="/deliverypolicy"
                  target="_blank"
                >
                  Delivery Policy
                </a>
              </span>
            </div>
          </span>
        </div>
        <button
          type="submit"
          disabled=""
          className="_1lxo _3IPV _2XwZ _1A0L _3T7p"
        >
          <span className="text-semi-bold">
            <div className="AVUr">
              <span>Confirm</span>
            </div>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

        
    <Footer/>

    </>
     );
}
 
export default signUp2;