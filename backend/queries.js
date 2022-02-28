const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants',
    password: '1508016',
    port: 5432
});

const getRestaurants = (req, res) => {
    pool.query('SELECT * FROM restaurants', (error, result) => {
        if (error) {
            res.send(error);
        }
        
        res.status(200).json(result.rows);
    });
}

const register = (req, res) => {
    const id = uuidv4();
    const {username, email, password} = req.body;

    if (username && email && password) {
        pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email], (err, resp) => {
            if (err) {
                res.send(err);
            }
    
            if (resp.rows.length > 0) {
                res.send("This username or email is already taken !");
            }
            else {
                bcrypt.hash(password, 10, (error, hash) => {
                    if (error) {
                        res.send(error);
                    }
            
                    pool.query('INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)', [id, username, email, hash], (errors, results) => {
                        if (errors) {
                            throw errors;
                        }
                        else {
                            res.send(`User with a Username of ${username}, Email of ${email} and ID ${id} successfully registered !`);
                        }
                    });
                });
            }
        });
    }
    else {
        res.send("Required fields cannot be empty !")
    }

}

const login = (req, res) => {
    const {userinfo, password} = req.body;

    if (userinfo && password) {
        pool.query('SELECT * FROM users WHERE username = $1 OR email = $1', [userinfo], (error, result) => {
            if (error) {
                res.send(error);
            }
    
            if (result.rows.length > 0) {
                bcrypt.compare(password, result.rows[0].password, (errors, response) => {
                    if (response) {
                        res.send(`Welcome ${result.rows[0].username}`);
                    } else {
                        res.send("Incorrect Username/Email and Password combination");
                    }
                });
            }
            else {
                res.send("This user does not exist");
            }
        });
    }
    else {
        res.send("Please enter a Username/Email and Password !");
    }
}

module.exports = {getRestaurants, register, login};