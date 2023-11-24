import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ListItem = ({
  item: { coverSrc, descriptivetype, cuisine, interpretation, specSrc , stateregion, descriptionimageone, daterecord, dateofimageione , descriptionimagetwo, dateofimagetwo, adminlevel, seasonalconditionsprimary, seasonalconditionsalternative1, seasonalconditionsalternative2, seasonalconditionsalternative3, otherconditionsprimary, otherconditionsalternative1, gridcode, sitename, sourceone, sourcetwo , sourcethree, descriptionimagethree, dateofimagethree,otherconditionsalternative2, recordername, coverSrc1, coverSrc2, test},
  
}) => {  
const navigate  = useNavigate()
 
const pdfGenerate=()=>
{
	var doc = new jsPDF();
	//doc.text(200, 100, "Product detailed report");
    //doc.addImage(coverSrc, 'JPEG', 10, 10, 190, 100);
   
	// doc.addImage(coverSrc, 'JPG', 0, 50, 600, 400, "A 500 x 500 pixel Limousine Cat", "none", 0);
    // doc.addImage(coverSrc, 'JPG', 0, 500, 72, 72, "A Postage Stamp Cat", "none", 0);
	
	var body = [[descriptivetype, interpretation, cuisine,stateregion, gridcode, sitename , daterecord ]]
	var headone= [['Descriptive type', 'Interpretation', 'Country', 'Admin Level 1', 'Grid No', 'Site Name','Date of record creation']]
	var imageonetable = [[descriptionimageone, dateofimageione, sourceone, seasonalconditionsprimary,otherconditionsprimary]]
	var headtwo = [['Description' , 'Date of image', 'Source of Image', 'seasonal condition', 'Others condition']]
	var imagesecondtable = [[descriptionimagetwo, dateofimagetwo, sourcetwo, seasonalconditionsalternative1,otherconditionsalternative1]]
	//var headthree = [['Description' , 'Date of image', 'Source of Image', 'seasonal condition', 'Others condition']]
	var imagethreetable = [[descriptionimagethree, dateofimagethree, sourcethree, seasonalconditionsalternative2, otherconditionsalternative2]]
	var imgData = '/images/places/logo.jpg';
	const date = new Date();
// generate auto table with body
var y = 10;
doc.setLineWidth(2);

doc.addImage(imgData, 'JPEG', 15, 5, 40, 25);

doc.text(155, y = y + 10, 'Visual Glossary');
doc.setFontSize(8);
doc.text(120, y = y + 10, `${date}`);
doc.setDrawColor(0, 0, 0);
doc.line(15, 33, 195, 33);
doc.autoTable({
	body: body,
	head: headone,
			startY: 37,
			styles: {
				overflow: 'visible', // Allow text to break and wrap
			  },
			//   columnStyles: {
			// 	0: { columnWidth: 25 }, // Adjust the width for each column
			// 	1: { columnWidth: 26 },
			// 	2: { columnWidth: 18 },
			// 	3: { columnWidth: 20 },
			// 	4: { columnWidth: 15 },
			// 	5: { columnWidth: 20 },
			// 	6: { columnWidth: 20 },
			//   },
			theme: 'grid',
			
					 })
//doc.text(50, 10, " MAEASAM Report");
doc.addImage(coverSrc, 'JPEG', 15, 55, 180, 150);
doc.autoTable({
	body: imageonetable,
	head: headtwo,
			startY: 210,
			theme: 'grid',
					 })

// doc.addImage(coverSrc, 'JPEG', 10, 230, 190, 100);
//  doc.addImage(coverSrc, 'JPEG', 10, 30, 190, 100);
// save the data to this file
// doc.save('auto_table_with_javascript_data');
doc.addPage();
doc.addImage(coverSrc1, 'JPEG', 15, 10, 180, 150);
doc.autoTable({
	body: imagesecondtable,
	head: headtwo,
			startY: 210,
			theme: 'grid',
			
					 })
doc.addPage();
doc.addImage(coverSrc2, 'JPEG', 15, 10, 180, 150);
doc.autoTable({
	body: imagethreetable,
	head: headtwo,
			startY: 210,
			theme: 'grid',
			
					 })
			
					 
	doc.save(`Visual_Glossary_${stateregion}_${cuisine}.pdf`)
}

const toComponentB=()=>{
  navigate('/CardInfo',{state:{aa:coverSrc, cl:coverSrc1, zz:coverSrc2 ,bb:descriptivetype, cc:cuisine, dd:interpretation, ee:specSrc, ff:dateofimageione, gg:dateofimagetwo, ii:daterecord, kl:dateofimagethree , jj:adminlevel, kk: seasonalconditionsprimary,ll:seasonalconditionsalternative1, mm:seasonalconditionsalternative2, nn: seasonalconditionsalternative3, oo: otherconditionsprimary, pp: otherconditionsalternative1, qq :gridcode, rr:sitename, ss:stateregion, tt:sourceone, uu:sourcetwo, vv:sourcethree, dne:descriptionimageone, dtw: descriptionimagetwo, dht:descriptionimagethree , reconame: recordername, hbr:test}});
    }
return (
<>
  

		
		 
	<div className="col" >
		 <div className="card radius-10 border-start border-0 border-3 border-info  ">
		  <Card.Body>
		  <Card.Text>
				<div className="d-flex align-items-center">
					<div>
						<p className="uppercase"><i className="mb-0 fs1">{descriptivetype}</i>,&nbsp;
						<i className="mb-0 fs1">{interpretation}</i>,&nbsp;
						<i className="mb-0 fs1">{cuisine}</i></p>
						{/* <p class="mb-0 text-secondary">{cuisine}</p> */}
            				<Button className=" btncolor" onClick={() => {toComponentB()}}>View</Button> &nbsp;
							<Button className=" btncolor" onClick={() => {pdfGenerate()}}>Download</Button>
        			</div>
					<img className="widgets-icons-2  bg-gradient-scooter text-white ms-auto" src={coverSrc} />        
				</div>  
				</Card.Text>      
			</Card.Body> 
		</div>    
	 </div>




</>
)
}
export default ListItem;
