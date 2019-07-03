import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class AppliedList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_APPLIED_JOBS_LIST' });
    }
    //function to move jobs to applied list
    handleMove = (job) => {
        this.props.dispatch({
            type: 'UPDATE_JOB_STATUS',
            payload: {
                job_id: job.id,
                status_id: 1,
            },
        })
    }

    //function to delete job
    handleDelete = (job) => {
        this.props.dispatch({
            type: 'DELETE_JOB',
            payload: job,
        })
    }

    //function to get job details for one job
    handleGetDetail = (job) => {
        // this.props.dispatch({
        //     type: 'FETCH_ONE_JOB_DETAIL',
        //     payload: job,
        // });
        this.props.history.push(`/job-list/detail/${job.id}`);
    }

    render() {
        return (
            <div>
                <h2>List of jobs to apply</h2>
                <pre>
                    {/* {JSON.stringify(this.props.reduxState.jobList.appliedJobsListReducer, null, 2)} */}
                </pre>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Job Title</TableCell>
                            <TableCell>company</TableCell>
                            <TableCell>Post URL</TableCell>
                            <TableCell>Move to Applied List</TableCell>
                            <TableCell>Delete Job</TableCell>
                            <TableCell>See Detail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.jobList.appliedJobsListReducer.map(job => <TableRow key={job.id}>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell><Button variant="contained" onClick={() => this.handleMove(job)}>Move</Button></TableCell>
                            <TableCell><Button variant="contained" onClick={() => this.handleDelete(job)}>Delete</Button></TableCell>
                            <TableCell><Button variant="contained" onClick={() => this.handleGetDetail(job)} id={job.id}>Detail</Button></TableCell>
                        </TableRow>)}
                    </TableBody>
                    </Table>

            </div>
                )
            }
        }
        

const mapReduxStateToProps = reduxState => ({
                    reduxState,
                })
export default connect(mapReduxStateToProps)(AppliedList);