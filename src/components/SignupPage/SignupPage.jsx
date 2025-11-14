import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordStrong = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

  const handleInputChange = (event) => {
    const map = {
      email: setEmail,
      password: setPassword,
      nationality: setNationality
    };

    const value = event.target.value;
    const name = event.target.name;

    const setter = map[name];
    setter(value);
    console.log(value);
  };

  const greetings = {
    nep: "Namaste",
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
    jpn: "Konnichiwa"
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <h4>Create a free account now</h4>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="john.doe@fake.com"
          value={email}
          onChange={handleInputChange}
          style={{ borderColor: isEmailValid ? "green" : "red" }}
        ></input>
        {email && isEmailValid && <p>You typed a valid email</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="**********"
          name="password"
          value={password}
          onChange={handleInputChange}
          style={{ borderColor: isPasswordStrong ? "green" : "red"}}
        ></input>
        {password && isPasswordStrong && <p>Your password is strong</p>}

        <label>Nationality</label>
        
        <select
          name="nationality"
          value={nationality}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select your nationality
          </option>
          <option value="nep">nep</option>
          <option value="fi">fi</option>
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="fr">fr</option>
          <option value="jpn">jpn</option>
        </select>

        <button>Sign up</button>

        <p>{greetings[nationality]}</p>
        <p>Your email address is: {email}</p>
        <p>Your email address is {isEmailValid}</p>
      </div>
    </section>
  );
}

export default SignUpPage;
