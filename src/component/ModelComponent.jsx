import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModelComponent = (props) => {
    return (
        <div>
            <Modal isOpen={props.hide}>
                <ModalHeader>User Details</ModalHeader>
                <ModalBody>
                        <div>
                           <b>FirstName: </b>{props.userdata?.firstName}
                        </div>
                        <div>
                        <b>LastName: </b>{props.userdata?.lastName}
                        </div>
                        <div>
                        <b>Role: </b>{props.userdata?.role}
                        </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModelComponent;