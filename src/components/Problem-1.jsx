import { useState } from 'react';

const Problem1 = () => {

    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const status = e.target.elements.status.value;
        setTasks((prevTasks) => [...prevTasks, { name, status }]);
    };

    const handleClick = (val) => {
        setShow(val);
    };

    const filteredTasks = tasks.filter((task) => {
        if (show === 'all') {
            return true;
        } else {
            return task.status === show;
        }
    });

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (a.status === 'Active' && b.status !== 'Active') {
            return -1;
        }
        else if (a.status !== 'Active' && b.status === 'Active') {
            return 1;
        }
        else if (a.status === 'Completed' && b.status !== 'Completed') {
            return -1;
        }
        else if (a.status !== 'Completed' && b.status === 'Completed') {
            return 1;
        }
        else {
            return 0;
        }
    });

    console.log(sortedTasks)
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                name="status"
                            />
                        </div>
                        <div className="col-auto">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'all' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'Active' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('Active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'Completed' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('Completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



      
    );
};

export default Problem1;