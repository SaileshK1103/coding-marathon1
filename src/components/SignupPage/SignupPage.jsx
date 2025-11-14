import { useState } from 'react';

function SignUpPage() {

const [email, setEmail] = useState("");


const handleInputChange = (event) => {
  setEmail(event.target.name);
  console.log(event.target.name);

}

    return(
        <section>
          <h1>Sign Up</h1>
            <h4>Create a free account now</h4>
              <div>
                <p>Email:</p>
                  <input
                    type="text"
                    name="email"
                    placeholder="john.doe@fake.com"
                    value={email}
                    onChange={handleInputChange}
                  ></input>
              </div>
        </section>

    );
}

export default SignUpPage;