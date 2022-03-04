import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurants',
    password: '1508016',
    port: 5432
});

export const getRestaurants = (req, res) => {
    pool.query('SELECT * FROM restaurants', (error, result) => {
        if (error) {
            res.send(error);
        }
        
        res.status(200).send(result.rows);
    });
}

export const getUserID = (req, res) => {
    const {name} = req.params;

    pool.query('SELECT * FROM users WHERE username = $1', [name], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.send(result.rows);
    });
}

export const getCollections = (req, res) => {
    const {id} = req.params;
    
    pool.query('SELECT * FROM collections WHERE user_id = $1', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.send(result.rows);
    });
}

export const getSavedRestaurants = (req, res) => {
    const {id} = req.params;

    pool.query('SELECT restaurants.id, restaurants.name, restaurants.timetable FROM cr_map JOIN restaurants ON cr_map.r_id = restaurants.id WHERE cr_map.c_id = $1', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.status(200).send(result.rows);
    });
}

export const register = (req, res) => {
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

export const login = (req, res) => {
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

export const addNewCollection = (req, res) => {
    const {name, old_id, user_id, res_id} = req.body;

    if (name) {
        pool.query('SELECT * FROM collections WHERE name = $1 AND user_id = $2', [name, user_id], (error, result) => {
            if (error) {
                res.send(error);
            }

            if (result.rows.length > 0) {
                res.send("This name already exists");
            }
            else {
                const new_id = uuidv1();

                pool.query('INSERT INTO collections (id, name, user_id) VALUES ($1, $2, $3)', [new_id, name, user_id], (err, resp) => {
                    if (err) {
                        res.send(err);
                    }

                    pool.query('INSERT INTO cr_map (c_id, r_id) VALUES ($1, $2)', [new_id, res_id], (errors, results) => {
                        if (errors) {
                            res.send(errors);
                        }

                        res.status(200).send("Success");
                    });
                });
            }
        });
    }
    else if (old_id) {
        pool.query('SELECT * FROM cr_map WHERE c_id = $1 AND r_id = $2', [old_id, res_id], (error, result) => {
            if (error) {
                res.send(error);
            }

            if (result.rows.length > 0) {
                res.send("This restaurant is already in this collection");
            }
            else{
                pool.query('INSERT INTO cr_map (c_id, r_id) VALUES ($1, $2)', [old_id, res_id], (error, result) => {
                    if (error) {
                        res.send(error);
                    }
        
                    res.status(200).send("Success");
                });
            }
        });
    }
    else {
        res.send("Please enter a name");
    }
}

export const renameCollection = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    if (name) {
        pool.query('UPDATE collections SET name = $1 WHERE id = $2', [name, id], (error, result) => {
            if (error) {
                res.send(error);
            }

            res.status(200).send("Success");
        });
    }
    else {
        res.send("Please enter a name");
    }
}

export const deleteCollection = (req, res) => {
    const {id} = req.params;

    pool.query('DELETE FROM cr_map WHERE c_id = $1', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        pool.query('DELETE FROM collections WHERE id = $1', [id], (err, resp) => {
            if (err) {
                res.send(error);
            }

            res.status(200).send("Success");
        });
    });
}

export const deleteRestaurant = (req, res) => {
    const {id} = req.params;

    pool.query('DELETE FROM cr_map WHERE r_id = $1', [id], (error, result) => {
        if (error) {
            res.send(error);
        }

        res.status(200).send("Success");
    });
}