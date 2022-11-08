import React, { useEffect, useState } from 'react'
import "./LatestTable.css"
import axios from 'axios'
const apiKey = "89b79f10-fa81-4e04-9a01-6fc6aeae02d5"
const url = `https://api.goperigon.com/v1/all?source=cnn.com&sortBy=date&apiKey=${apiKey}&size=5`

function Table() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setPosts(res.data.articles)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            

            <div className='table-container'>
                <table className='table'>
                    <ul>
                        <li className='pubd'>Publish Date</li>
                        <li>News</li>
                        <li>Positive</li>
                        <li>Negative</li>
                        <li>Neutral</li>
                    </ul>
                    {posts.map((Data) => {
                        const { id, title, pubDate, sentiment } = Data;
                        return <div className='cont' key={id}>
                            <tbody>
                                <tr>
                                    <td data-label="Start Date">{new Date(pubDate).toGMTString()}</td>
                                    <td data-label="Start / End Time">{title}</td>
                                    <td data-label="Batch Type" className='pos'>{sentiment.positive}</td>
                                    <td data-label="Training Mode" className='neg'>{sentiment.negative}</td>
                                    <td data-label="Batch Status" className='neu'>{sentiment.neutral}</td>
                                </tr>
                            </tbody>
                        </div>
                    })}
                </table>
            </div>

        </>
    )
}


export default Table