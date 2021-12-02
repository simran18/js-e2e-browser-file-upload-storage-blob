import React, { PureComponent } from "react";

import ImageMapper from "react-image-mapper";

//it do not resizes after window size click

export default class InteractiveImage extends PureComponent {
    state = {
        isZoomed: false,
        setIsZoomed: false,
        hoveredArea: "",
        MAP: {
          name: "my-map",
          areas: [
            {
              shape: "poly",
              coords: [199,119,220,133,217,117,208,97,188,88,172,95,190,103]
            },
            {
              shape: "poly",
              coords: [116,89,100,83,89,85,75,98,71,115,72,126,86,117,94,100]
            },
            {
              shape: "poly",
              coords: [491,95,502,92,512,88,524,98,530,111,529,127,519,119,508,104]
            },
            {
              shape: "poly",
              coords: [426,97,414,96,404,93,390,103,385,121,385,131,399,121,408,106]
            },
            {
              shape: "poly",
              coords: [193,120,209,132,223,143,230,159,229,170,216,167,202,149]
            },
            {
              shape: "poly",
              coords: [65,167,74,166,85,149,90,135,94,116,77,127,67,138,64,156]
            },
            {
              shape: "poly",
              coords: [133,96,118,97,103,102,101,114,104,126,108,138,117,143,139,141,141,121]
            },
            {
              shape: "poly",
              coords: [155,97,146,120,149,142,167,143,181,136,186,117,183,106,171,98]
            },
            {
              shape: "poly",
              coords: [98,123,95,134,99,148,102,134]
            },
            {
              shape: "poly",
              coords: [188,122,186,134,188,152,192,134]
            },
            {
              shape: "poly",
              coords: [410,134,426,138,438,135,451,165,441,182,433,204,420,184,419,168,412,146]
            },
            {
              shape: "poly",
              coords: [462,162,478,131,488,135,503,134,503,142,495,166,494,182,485,195,481,202]
            },
            {
              shape: "poly",
              coords: [464,55,449,56,448,66,439,76,416,94,429,97,437,105,440,129,457,158,475,124,481,95,497,90,475,77,465,67]
            },
            {
              shape: "poly",
              coords: [180,87,160,72,163,89]
            },
            //
            {
                shape: "poly",
                coords: [404,127,384,136,378,146,369,164,374,180,386,176,399,156,407,141]
              },
              {
                shape: "poly",
                coords: [510,119,508,137,523,170,533,176,537,162,531,135]
              },
              {
                shape: "poly",
                coords: [411,130,430,132,410,119]
              },
              {
                shape: "poly",
                coords: [485,132,503,129,505,117]
              },
            {
              shape: "poly",
              coords: [414,110,427,101,431,106,432,118,435,129,420,119]
            },
            {
              shape: "poly",
              coords: [489,97,503,105,484,129,479,128,483,106]
            },
            {
              shape: "poly",
              coords: [74,188,72,182,56,210,57,214]
            },
            {
              shape: "poly",
              coords: [220,185,222,185,242,209,238,212]
            },
            {
                shape: "poly",
                coords: [379,183,384,185,354,225,354,223]
              },
              {
                shape: "poly",
                coords: [548,225,550,225,527,181,526,186]
              },
              {
                shape: "poly",
                coords: [70,184,68,178,49,206,54,208]
              },
              {
                shape: "poly",
                coords: [224,181,227,180,246,206,243,208]
              },
              {
                shape: "poly",
                coords: [61,177,58,166,47,179,41,206,45,207]
              },
              {
                shape: "poly",
                coords: [232,167,232,177,247,201,251,200,245,178]
              },
              {
                shape: "poly",
                coords: [363,179,363,201,352,220]
              },
              {
                shape: "poly",
                coords: [545,178,549,216,542,198]
              },
              {
                shape: "poly",
                coords: [346,219,348,221,357,191]
              },
              {
                shape: "poly",
                coords: [555,220,558,220,547,179]
              },
              {
                shape: "poly",
                coords: [341,218,344,218,354,193]
              },
              {
                shape: "poly",
                coords: [563,217,560,219,554,195]
              },
              {
                shape: "poly",
                coords: [548,176,556,181,559,198]
              },
              {
                shape: "poly",
                coords: [347,201,356,179,361,178]
              },
              {
                shape: "poly",
                coords: [365,178,368,175,371,189,368,194]
              },
              {
                shape: "poly",
                coords: [542,172,545,174,539,191,536,187]
              },
              {
                shape: "poly",
                coords: [103,145,111,149,108,156,110,158,104,163,101,152]
              },
              {
                shape: "poly",
                coords: [173,150,181,154,180,160,184,163,183,145]
              },
              {
                shape: "poly",
                coords: [123,147,144,145,165,148,166,200,161,218,153,255,136,256,122,208]
              },
              {
                shape: "poly",
                coords: [171,153,185,168,184,218,170,230]
              },
              {
                shape: "poly",
                coords: [117,150,106,169,101,217,119,233]
              },
              {
                shape: "poly",
                coords: [489,198,498,206,493,187]
              },
              {
                shape: "poly",
                coords: [417,206,425,197,419,187]
              },
              {
                shape: "poly",
                coords: [426,200,431,209,418,210]
              },
              {
                shape: "poly",
                coords: [489,199,498,212,484,209]
              },
              {
                shape: "poly",
                coords: [182,243,177,267,170,289,176,315,178,327,185,327,189,304,192,274]
              },
              {
                shape: "poly",
                coords: [105,242,108,259,115,287,116,303,110,321,110,329,103,328,101,318,97,306,95,274]
              },
              {
                shape: "poly",
                coords: [170,252,165,244,162,249,167,258]
              },
              {
                shape: "poly",
                coords: [123,247,126,252,120,260,117,255]
              },
              {
                shape: "poly",
                coords: [140,272,132,264,136,275,136,287,134,298,130,319,141,292]
              },
              {
                shape: "poly",
                coords: [153,267,148,273,147,288,157,318,152,288]
              },
              {
                shape: "poly",
                coords: [434,283,429,299,429,310,426,326,424,339,428,358,430,355,429,343,434,324,437,314,439,296]
              },
              {
                shape: "poly",
                coords: [477,282,475,292,472,307,478,325,482,340,483,348,484,357,487,337,483,307,484,291]
              },
              {
                shape: "poly",
                coords: [422,216,435,216,443,219,428,224,417,234]
              },
              {
                shape: "poly",
                coords: [497,235,491,215,481,216,471,218,486,224]
              },
              {
                shape: "poly",
                coords: [440,220,417,237,415,261,423,279,445,280,457,264,466,281,488,282,497,265,494,237,474,220,457,241]
              },
              {
                shape: "poly",
                coords: [429,285,421,284,414,305,410,328,409,343,417,345,422,328,425,305]
              },
              {
                shape: "poly",
                coords: [483,284,491,282,499,304,501,319,503,330,505,344,496,348,491,329,487,301]
              },
              {
                shape: "poly",
                coords: [472,312,475,319,479,338,481,356,479,365,477,351,473,328,471,319]
              },
              {
                shape: "poly",
                coords: [441,311,438,321,436,333,433,346,434,364,437,353,440,337]
              },
              {
                shape: "poly",
                coords: [191,258,193,270,193,287,192,308,189,321,187,329,187,338,193,339,195,327,197,290,196,272]
              },
              {
                shape: "poly",
                coords: [100,337,100,326,94,310,92,293,94,272,97,257,89,278,89,290,90,313,95,338]
              },
              {
                shape: "poly",
                coords: [406,419,419,451,420,460,410,439,407,429]
              },
              {
                shape: "poly",
                coords: [508,421,501,434,496,457,504,442]
              },
              {
                shape: "poly",
                coords: [112,421,114,426,119,429,117,443,114,463,111,440]
              },
              {
                shape: "poly",
                coords: [174,465,171,446,168,430,173,427,176,419]
              },
              {
                shape: "poly",
                coords: [107,228,116,257,122,273,126,295,127,310,127,329,122,300,117,278,110,253,106,237]
              },
              {
                shape: "poly",
                coords: [182,228,179,229,171,254,164,271,160,296,160,325,162,310,165,293,169,277,176,252]
              },
              {
                shape: "poly",
                coords: [126,253,120,261,125,272,129,288,130,304,132,297,132,285,131,268]
              },
              {
                shape: "poly",
                coords: [159,255,165,263,162,272,159,286,157,305,155,295,154,284,154,270]
              },
              {
                shape: "poly",
                coords: [118,288,122,311,124,333,122,343,115,344,112,332,115,317,118,305]
              },
              {
                shape: "poly",
                coords: [169,290,166,306,164,318,163,332,166,345,175,343,173,324,171,311]
              },
              {
                shape: "poly",
                coords: [423,361,432,373,432,388,435,408,432,424,434,425,425,420,423,413,415,417,406,420,403,406,403,389,408,366,414,357,417,366]
              },
              {
                shape: "poly",
                coords: [489,359,493,367,500,358,508,365,509,376,512,393,510,410,507,421,499,417,491,410,488,419,483,425,479,416,481,394,483,380,483,370]
              },
              {
                shape: "poly",
                coords: [117,382,122,399,122,410,121,424,113,418,111,409,111,393]
              },
              {
                shape: "poly",
                coords: [170,382,177,397,175,415,167,424,166,411,167,398]
              },
              {
                shape: "poly",
                coords: [453,276,448,282,439,286,443,298,442,323,451,296]
              },
              {
                shape: "poly",
                coords: [473,285,461,277,462,293,471,320,470,297]
              },
              {
                shape: "poly",
                coords: [96,372,100,384,101,402,104,435,100,435,94,406,94,390]
              },
              {
                shape: "poly",
                coords: [191,370,193,384,192,398,191,411,186,434,183,433,185,411,188,392]
              }


          ]
        },
        size: 800
      };

      getInitialState = () => {
        return { hoveredArea: null, msg: null, moveMsg: null };
      };

      handleImgLoad = () => {
        this.setState(() => ({ isZoomed: true }));
      };
      handleZoomChange = (shouldZoom) => {
        this.setState(() => ({ isZoomed: shouldZoom }));
      };

  load = () => {
    this.setState({ msg: "Select the muscles you want to focus on!" });
  };

  clickedOutside(evt){

    let newareas = [
      {
        name: "clicked",
        shape: "circle",
        coords: [evt.nativeEvent.layerX, evt.nativeEvent.layerY, 5],
        preFillColor: "purple",
        fillColor: "black"
      }
    ];
   
    let MAP = {
        name: this.state.MAP.name,
      areas: newareas
    };
     this.setState(() => ({ MAP }));
  };

  clicked = async (area) => {
    await this.setState({
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  };

  render() {

    const { URL } = this.props;


    return (
      <div>
        <div>
          <ImageMapper
            src={URL}
            map={this.state.MAP}
                width={this.state.size}
                onLoad={() => this.load()}
                onClick={(area) => this.clicked(area)}
                onImageClick={(evt) => this.clickedOutside(evt)}
                lineWidth={4}
                strokeColor={"white"}
          />
          {this.state.hoveredArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}
              >
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            )}
          
        </div>
      </div>
    );
  }
}
