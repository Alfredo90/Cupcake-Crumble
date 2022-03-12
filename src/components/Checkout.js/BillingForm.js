import { useState, useMemo } from "react";

const BillingForm = () => {
  const [billingValues, setBillingValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    ste: "",
    city: "",
    usState: "",
    zipCode: "",
  });

  const usStates = useMemo(() => [
    "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", 
    "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", 
    "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", 
    "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV",
    "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", 
    "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", 
    "WY"
], [])

  const billingHandler = e => setBillingValues({...billingValues, [e.target.name]: e.target.value})
  return(
    <form>
            <fieldset>
                <legend>Billing</legend>
                <label>
                    First Name
                    <input type="text" name="firstName" value={billingValues} required autoComplete="given-name" onChange={billingHandler}/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" value={billingValues} required autoComplete="family-name" onChange={billingHandler}/>
                </label>
                <label>
                    Address
                    <input type="text" name="address" value={billingValues} required autoComplete="shipping street-address" onChange={billingHandler}/>
                </label>
                <label>
                    Apt/Suite (optional)
                    <input type="text" name="aptNum" value={billingValues}  onChange={billingHandler}/>
                </label>
                <label>
                    City
                    <input type="text" name="city" value={billingValues} required autoComplete="shipping locality" onChange={billingHandler}/>
                </label>
                <label>
                    State
                    <input type="text" list="us-state" name="usState" value={billingValues} required autoComplete="shipping region" onChange={billingHandler}/>
                    <datalist id="us-state">
                        {usStates.map(usState => <option key={usState}value={usState}/>)}
                    </datalist>
                </label>
                <label>
                    Zip Code
                    <input type="text" name="zipCode" value={billingValues} required autoComplete="shipping postal-code" onChange={billingHandler}/>
                </label>
            </fieldset>
        </form>
  )
};

export default BillingForm;
