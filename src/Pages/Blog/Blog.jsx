import React from 'react';

const Blog = () => {
    document.title = "Matico | Blog"
    return (
        <section className='container mx-auto my-5'>
            <div>
                <h1 className='text-3xl font-bold'>What is express js?</h1>
                <p> Express js is a framework of node js . It is very fast framework . Thats why it is very popular framework now . We also said minimalist web application framework for Node.js . It simplifies the process of building api and also we can manage api by using it . With Express.js, you can create server-side applications that handle HTTP requests and responses . We can easily connent with mongodb using express</p>
                <br />
                <br />
                <h1 className='text-3xl font-bold'> What is Nest JS ?</h1>
                <p>Nest.js is a popular framework for building server-side applications with Node.js . Next js created by Kamil Mysliwiec. It is easily supported by popular databases such as

                    <ul className=''>
                        <ul> 0. PostgreSQL</ul>

                        <ul> 1. MySQL</ul>

                        <ul> 2. MongoDB</ul>

                        <ul> 3. Redis</ul>

                        <ul> 4. Apache Cassandra</ul>

                    </ul>
                    In fact, it offers the vast flexibility to use it with other libraries and is heavily influenced by Angular, React, and Vue. Thats why this framework is very popular today.It follows the principles of Dependency Injection, which helps manage the dependencies between different components of an application, Decorators, and Modules to structure and organize the application code.
                </p>
            </div>



<div>
    <h1 className='text-3xl font-bold'>Compare SQL and NoSQL databases?</h1>
    <h1 className='underline my-6'>SQL :-</h1>
    <ul>
        <li>SQL databases are vertically scalable.</li>
        <li>SQL databases have fixed or static or predefined schema.</li>
        <li>SQL databases display data in form of tables so it is known as table-based database..</li>
        <li>SQL databases are best suited for complex queries.</li>
    </ul>


    <h1 className='underline my-6'>NoSQL :-</h1>
    <ul>
        <li>NoSQL databases are horizontally scalable.</li>
        <li>NoSQL databases have dynamic schema.</li>
        <li>NoSQL databases collection of key-value pair, documents, graph databases or wide-column stores.</li>
        <li>NoSQL databases are not so good for complex queries</li>
    </ul>
</div>




<div>
<h1 className="text-3xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
<p>
An access token is a credential that is used to access a protected thing like api in website . It is very popular to disallow get data from api . so that people cant't see other's important data . It serves as a proof of authentication and authorization . And A refresh token is token which create a new token for user when the original access token is expire. when the access expire  the refresh token can be sent to the authentication server to request a new access token without having to re-authenticate the user or application. We can store access token HTTP-only cookies or local or seasson storeges.


</p>
</div>

<div>
<h1 className="text-3xl font-bold py-5">What is MongoDB aggregate and how does it work?</h1>
<p>
MongoDB aggregate is a powerful feature that allows you to perform advanced data analysis and transformation on your data stored in a MongoDB database. It works by providing a way to process and combine multiple documents in a collection and perform various operations on them.

 Each stage takes the input from the previous stage and processes it further, allowing you to progressively transform and refine your data until you get the desired results. It's like building a pipeline of operations to manipulate and analyze your data.

Once the aggregate command is executed, MongoDB applies each stage in order and produces a final result based on the specified operations. This result can be a single document or a set of documents, depending on your requirements.</p>


</div>
        </section>
    );
};

export default Blog;