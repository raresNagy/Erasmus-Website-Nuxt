<template>
  <nav>
    <ul>
      <li><a href="./">Home</a></li>
    </ul>
    <ul class="account">
      <li><a href="">Login</a></li>
      <li><a href="/register">Register</a></li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--eu-blue);
  padding: 0;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2%;
}

ul li {
  color: var(--text-white);
  margin: 5%;
  font-weight: 400;
  transition: font-weight 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

ul li:hover {
  font-weight: 800;
}

a {
  color: var(--text-white);
}

a,
u {
  text-decoration: none;
}
</style>