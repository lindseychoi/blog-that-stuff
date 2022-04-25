const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("logout function activate");
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }

document.getElementById('logoutbtn').addEventListener('click', logout);
