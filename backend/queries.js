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
        if (password.length < 6) {
            res.send("Password should be 6 characters or longer");
        }
        else {
            pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email], (err, resp) => {
                if (err) {
                    res.send(err);
                }
        
                if (resp.rows.length > 0) {
                    res.send("This Username or Email is already taken");
                }
                else {
                    bcrypt.hash(password, 10, (error, hash) => {
                        if (error) {
                            res.send(error);
                        }
                
                        pool.query('INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)', [id, username, email, hash], (errors, results) => {
                            if (errors) {
                                res.send(errors);
                            }
                            
                            res.status(200).send("Success");
                        });
                    });
                }
            });
        }
    }
    else {
        res.send("Required fields cannot be empty");
    }

}

const login = (req, res) => {
    const {username, password} = req.body;

    if (username && password) {
        pool.query('SELECT * FROM users WHERE username = $1', [username], (error, result) => {
            if (error) {
                res.send(error);
            }
    
            if (result.rows.length > 0) {
                bcrypt.compare(password, result.rows[0].password, (errors, response) => {
                    if (response) {
                        res.status(200).send("Success");
                    }
                    else {
                        res.send("Incorrect Username and Password combination");
                    }
                });
            }
            else {
                res.send(`User doesn't exist`);
            }
        });
    }
    else {
        res.send("Required fields cannot be empty");
    }
}

module.exports = {getRestaurants, register, login};