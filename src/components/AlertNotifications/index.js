// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const AlertNotifications = () => {
  const renderInfoAlert = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="details">
        <h1 className="info card-title">Info</h1>
        <p className="card-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningAlert = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="details">
        <h1 className="warning card-title">Warning</h1>
        <p className="card-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorAlert = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="details">
        <h1 className="error card-title">Error</h1>
        <p className="card-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessAlert = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="details">
        <h1 className="success card-title">Success</h1>
        <p className="card-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <h1 className="heading">Alert Notifications</h1>
      {renderSuccessAlert()}
      {renderErrorAlert()}
      {renderWarningAlert()}
      {renderInfoAlert()}
    </div>
  )
}

export default AlertNotifications
