import React from 'react';
import { LineGraph } from './LineGraph';
import Piechart from './Piechart';
import RegionTable from './RegionTable';
import Table from './ranked';
import UnpaidTable from './LeastRanked';
import ProgressBar from './ProgressBar';
import ContextualExample from './ProgressBar';

const Dashboard = () => {
  return (
    <div>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 1 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$12.34</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Potential growth</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 2 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$17.34</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+11%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Revenue current</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 3 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$12.34</h3>
                          <p class="text-danger ms-2 mb-0 font-weight-medium">-2.4%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-danger">
                          <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Daily Income</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 4 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$31.53</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Expense current</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {/* ward table */}
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    {/* <h4 class="card-title">Ward List</h4> */}
                    {/* <canvas id="transaction-history" class="transaction-chart"></canvas> */}
                    {/* <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div class="text-md-center text-xl-left">
                        <h6 class="mb-1">Transfer to Paypal</h6>
                        <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                      </div>
                      <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 class="font-weight-bold mb-0">$236</h6>
                      </div>
                    </div> */}
                    {/* <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div class="text-md-center text-xl-left">
                        <h6 class="mb-1">Tranfer to Stripe</h6>
                        <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                      </div>
                      <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 class="font-weight-bold mb-0">$593</h6>
                      </div>
                    </div> */}
                    <RegionTable/>
                  </div>
                </div>
              </div>
              {/* map card */}
              <div class="col-md-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
                {/* progess chart */}
              <div class="col-sm-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <ContextualExample/>
                    
                  </div>
                </div>
              </div>
               {/* pie chart */}
              <div class="col-sm-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                   <Piechart/>
                  </div>
                </div>
              </div>
            
             
            </div>
            {/* line chart */}
            <div className="row ">
              <div className="col-8 grid-margin">
                <div className="card">

                <div style={{width:"100%",height:"50vh"} }><LineGraph/></div>
    

                    
                  
                </div>
              </div>
              {/* bar graph */}
              <div className="col-4 grid-margin">
                <div className="card">

                <div style={{width:"50%",height:"50vh"}}></div>
    

                    
                  
                </div>
              </div>
            </div>
            
              
            
            {/* table ranking  */}
            <div class="row">
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <Table/>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                    
                    <UnpaidTable/>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Map</h4>
                    
                  
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          
         
        </div>
    </div>
  );
}

export default Dashboard