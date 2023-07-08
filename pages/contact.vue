<!--
    Contact Page
-->
<template>
  <div class="max-w-5xl md:mx-auto mt-20 flex justify-center items-center">
    <div class="w-1/2 m-10">
      <h1
        class="text-9xl font-extrabold text-center"
        style="font-family: ArchivoBlack"
      >
        Let's <br /><span class="image-after">TALK!</span>
      </h1>
      <p class="text-justify mt-10 font-sans text-lg">
        We value open communication and are always eager to connect with
        individuals and businesses who share our passion for innovation. Whether
        you're seeking investment opportunities or looking to collaborate, we
        invite you to get in touch with us.<br />
        <span class="font-bold"
          >Reach out to us via the contact form, and we'll respond
          promptly.</span
        >
      </p>
    </div>
    <div class="w-1/2 m-10">
      <form>
        <div>
          <label for="name">Name &amp; Surname</label>
          <input type="text" id="name" placeholder="Name &amp; Surname" />
        </div>
        <div>
          <label for="mail">E-mail</label>
          <input type="email" id="mail" placeholder="E-mail" />
        </div>
        <div>
          <label for="subject">I am... (entrepreneur/investor)</label>
          <div class="select-wrapper">
            <select id="subject">
              <option value="" selected disabled>Select a subject</option>
              <option value="enterpreneur">Entrepreneur</option>
              <option value="investor">Investor</option>
            </select>
          </div>
        </div>
        <div id="message-div">
          <label for="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  </div>
</template>

<style>
form {
  background-color: #ff006b;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

form div {
  margin-bottom: 10px;
}

label {
  display: block;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea,
select {
  border-radius: 5px;
  background-color: white;
  padding: 5px;
  width: 100%;
}

.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
