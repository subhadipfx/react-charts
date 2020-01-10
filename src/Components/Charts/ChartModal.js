import React from 'react'

export default (props) => {
    return(
        <div className="modal fade" id={props.id} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Chart</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                {props.type}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" >Close</button>
                            </div>
                        </div>
      
                    </div>
                </div>
    )
}