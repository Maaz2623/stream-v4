import { Client, Databases, Query } from "appwrite"


const database_id = '654cdcd49f39b234f2c1'
const collection_id = '654cdd07019f058107b5'

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('654cd9ea23757f66a4b3')

const databases = new Databases(client)


export const fetchMovies = async () => {
    try {
        const res = await databases.listDocuments(database_id, collection_id)
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
}


export const fetchSingleMovie = async (slug) => {
    try {
        const res = await databases.listDocuments(database_id, collection_id, [
            Query.equal('slug', slug)
        ])
        return res.documents[0]
    } catch (error) {
        console.log(error)
    }
}