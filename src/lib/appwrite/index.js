import { Client, Databases, Query, ID } from "appwrite";

const database_id = "654cdcd49f39b234f2c1";
const collection_id = "654cdd07019f058107b5";
const suggestion_collection_id = '6554e5413b11cf41dc8a'

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654cd9ea23757f66a4b3");

const databases = new Databases(client);

export const fetchMovies = async () => {
  try {
    const res = await databases.listDocuments(database_id, collection_id);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleMovie = async (slug) => {
  try {
    const res = await databases.listDocuments(database_id, collection_id, [
      Query.equal("slug", slug),
    ]);
    return res.documents[0];
  } catch (error) {
    console.log(error);
  }
};

// export const saveUnsaveMovie = async (isSaved, id) => {
//     try {
//         if(isSaved==false || isSaved==null){
//             await databases.updateDocument(database_id, collection_id, id, {
//                 "isSaved": true
//             })
//             console.log("Saved")
//         }
//         if(isSaved==true) {
//             await databases.updateDocument(database_id, collection_id, id, {
//                 "isSaved": false
//             })
//             console.log("Unsaved")
//         }
//         console.log("Updated");
//     } catch (error) {
//         console.log(error)
//     }
// }

export const saveMovie = async (id) => {
  try {
    const res = await databases.updateDocument(database_id, collection_id, id, {
      isSaved: true,
    });
    console.log("Saved");
  } catch (error) {
    console.log(error);
  }
};

export const unsaveMovie = async (id) => {
  try {
    const res = await databases.updateDocument(database_id, collection_id, id, {
      isSaved: false,
    });
    console.log("Unsaved");
  } catch (error) {
    console.log(error);
  }
};

export const fetchSaved = async () => {
  try {
    const res = await databases.listDocuments(database_id, collection_id, [
      Query.equal("isSaved", true),
    ]);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query) => {
  try {
    const res = await databases.listDocuments(database_id, collection_id, [
      Query.startsWith('title', query),
    ]);
    return res.documents.reverse();
  } catch (error) {
    console.log(error);
  }
};


export const createSuggestion = async ({title, releaseYear}) => {
  try {
    const res = await databases.createDocument(database_id, suggestion_collection_id, ID.unique(), {
      'title': title,
      'releaseYear': releaseYear
    })
    console.log(res, "Created")
    return res
  } catch (error) {
    console.log(error)
  }
}


export const getSuggestions = async () => {
  try {
    const res = await databases.listDocuments(database_id, suggestion_collection_id)
    return res.documents.reverse()
  } catch (error) {
    console.log(error)
  }
}