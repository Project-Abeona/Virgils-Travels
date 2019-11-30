import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = {
    card: {
      maxWidth: 345,
      border: "2px solid #000"
    },
    media: {
      height: 100,
    }
}

class Business extends React.Component {

      render(){
          
        return (
        <div className="col-sm-4">
          <Card className={useStyles.card}>
            <CardActionArea>
                <br/>
                <center>
                    <img
                        src={this.props.business.imageSrc}
                        alt={this.props.business.name}
                        height="200px"
                    />
                </center>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <center>
                        <span style={{color: '#333333'}}>{this.props.business.name}</span>
                    </center>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <center>
                    <p>{this.props.business.address}<br/>
                  {this.props.business.city}<br/>
                  {`${this.props.business.state} ${this.props.business.zipCode}`}<br/>
                  
                  <strong>{`${this.props.business.rating} stars`}</strong>
                  </p>
                </center>
                </Typography>
              </CardContent>
            </CardActionArea>
      
          </Card>
          <br/>
          </div>    
        );
      };
}

export default Business;