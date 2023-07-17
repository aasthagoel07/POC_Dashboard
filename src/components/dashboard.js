import React from 'react'
import "../assets/css/dashboard.css"
import TopData from './dashboardComponent/topDataHeader'
import UploadFileComponent from './dashboardComponent/uploadFiles/uploadFileComponent'

function Dashboard() {
  return (
    <div>
      <div className='container-screen'>
        <div className='top-head-title'>
          <label className='main-title'>APS (Summarize)</label>
          <div>
          <select name="days" id="days" className='text-sm min-w-[112px] form-select'>
            <option value="30days">Last 30 Days</option>
            <option value="60days">Last 60 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
          </div>

        </div>
        <div>
          <TopData />
        </div>
        <div>
          <UploadFileComponent />
        </div>

      </div>

    </div>
  )
}

export default Dashboard