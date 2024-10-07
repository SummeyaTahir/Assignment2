import React from 'react'
import '../js/modules/chartjs.js';
function Line_Chart() {
  return (
    <>
      
			<main className="content">
				<div className="container-fluid p-0">

					<div className="mb-3">
						<h1 className="h3 d-inline align-middle">Chart.js</h1>
						<a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
      Get more chart examples
  </a>
					</div>
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="card flex-fill w-100">
								<div className="card-header">
									<h5 className="card-title">Line Chart</h5>
									<h6 className="card-subtitle text-muted">A line chart is a way of plotting data points on a line.</h6>
								</div>
								<div className="card-body">
									<div className="chart">
										<canvas id="chartjs-line"></canvas>
									</div>
								</div>
							</div>
						</div>
                        </div>
                        </div>

</main>
    </>
  )
}

export default Line_Chart
