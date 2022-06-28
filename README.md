# iShelter
Hackathon Challenge to Build an App to help Ukrainian Refugees find aid

[![logo.png](https://i.postimg.cc/T2z9mYrR/readme.png)](https://postimg.cc/G9jGnR7N)

<h2>Front end to Back End request/response diagram:</h2>

![image](https://user-images.githubusercontent.com/75331586/175826089-a347086b-1bef-4e9f-af63-ddb56b860e91.png)

<h2>BACK-END:</h2>
<h3>Installation</h3>

1) Create directory above repository

![image](https://user-images.githubusercontent.com/75331586/175826024-b2789bd3-e51a-4362-8b67-56a3e88d7980.png)


2) In direcory above repository create virtual environment
> python3 -m venv envSafe

! If `python3` doesn't work, may have to use `python`

Your directory tree should look like this:
![image](https://user-images.githubusercontent.com/75331586/175825979-ce3f90c1-c547-4d7c-bb2d-a9bfd2acb01e.png)

3) Activate virtual environment 
(Windows)
> envSafe/Scripts/activate

May have to use `call`
> call envSafe/Scripts/activate

(Mac/Linux)
> source envSafe/bin/activate
5) Install CORS Headers library
>pip install django-cors-headers

6) installing django-cors-headers will install Django Version 4.0.0, but we're using 3.0.0. So you may have to uninstall Django
>pip uninstall Django

4) install the rest of the packages
>pip install Django==3.0.0 djangorestframework djangorestframework-simplejwt requests

<h3>Run server</h3>

1) Make Migrations and Migrate
> python3 path/to/manage.py makemigrations

> python3 path/to/manage.py migrate

2) Run django server
> python3 path/to/manage.py runserver

Admin
1) Create superuser
> python path/to/manage.py createsuperuser
2) Follow prompts
3) Test login at http://127.0.0.1:8000/admin/

<h3>Endpoints</h3>

<h3>Get CSRF Token</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td><td>api/csrf/</td>
        </tr>
    </tbody>
<table>

<h3>Check session</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td><td>session/check</td>
        </tr>
    </tbody>
<table>

<h3>Register</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td><td>api/users/register</td>
        </tr>
    </tbody>
<table>

<h3>User Login</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST*</td><td>api/users/login</td>
        </tr>
    </tbody>
<table>
Requires CSRF Token

<h3>New Announcement</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td><td>api/announcements/create</td>
        </tr>
    </tbody>
<table>

<h3>All Announcements</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td><td>api/announcements/all</td>
        </tr>
    </tbody>
<table>

<h3>Get all profiles</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td><td>api/v1/profiles</td>
        </tr>
    </tbody>
<table>

<<<<<<< HEAD
<h3>Get all profiles</h3>
<table>
    <thead>
        <tr>
            <th>Method</th><th>URI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td><td>api/v1/profiles</td>
        </tr>
    </tbody>
<table>
=======
<h2>OUR TEAM</h2>

1. Lee Aarron - **[leeaarron (Github)](https://github.com/leeaarron)**
2. Stuart Yee - **[Stuart-Yee (Github)](https://github.com/Stuart-Yee)**
3. René Caceres- **[caceresrene(Github)](https://github.com/caceresrene)**
4. Jhomar Astuyauri - **[Jhomar1158-ux (Github)](https://github.com/Jhomar1158-ux)**
5. Lino Cruz - **[LinoCruz (Github)](https://github.com/LinoCruz)**
6. Damian Cardenas- **[Mauffin (Github)](https://github.com/Mauffin)**

>>>>>>> 9d12148d57e633a5ad3b9b6efcf31bb6d4a82baa
