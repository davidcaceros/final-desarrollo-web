import { DATABASE_URL } from './config.js'

export const crearCliente = async (req, res) => {
    const { nombres, apellidos, genero, fecha_nacimiento, estado } = req.body
    try {
        const [rows] = await DATABASE_URL('INSERT INTO cliente_final (nombres, apellidos, genero, fecha_nacimiento, estado) VALUES (?,?,?,NOW(),?)', [nombres, apellidos, genero, fecha_nacimiento, estado])
        res.send({
            id: rows.insertId,
            nombres,
            apellidos,
            genero,
            fecha_nacimiento,
            estado
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}


export const getCliente = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente_final WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Cliente no existe'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal con el servidor'
        })
    }
}

