# SafeMaps
Hackathon Challenge to Build an App to help Ukrainian Refugees find aid


BACK-END:
Installation

1) Create directory above repository
C:.
└───Hackathon (new directory)
    └───SafeMaps (repository)
        ├───Client
        └───Server

2) In direcory above repository create virtual environment
> python3 -m venv envSafe
Your directory tree should look like this:
C:.
└───Hackathon
    ├───envSafe (new directory with virtual environment OUTSIDE of repo)
    └───SafeMaps
        ├───Client
        └───Server

3) Activate virtual environment 
> envSafe/Scripts/activate
May have to use `call`
> call envSafe/Scripts/activate
4) pip install Django==3.0.0 djangorestframework

Run server

1) Run django server
> python path/to/manage.py runserver

Admin
1) Create superuser
> python path/to/manage.py createsuperuser
2) Follow prompts
3) Test login at http://127.0.0.1:8000/admin/

Endpoints

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