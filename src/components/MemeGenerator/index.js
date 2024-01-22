import {Component} from 'react'

import {
  AppContainer,
  MemeContainer,
  MemeGenerartorContainer,
  TextContent,
  MemeGeneratorForm,
  Label,
  Input,
  Select,
  Option,
  GenerateButton,
  Heading,
  FormAndMemoContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionInputId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({activeFontSizeOptionInputId: event.target.value})
  }

  onGenerationMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionInputId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionInputId,
    })
  }

  renderMemeGenerationForm = () => {
    const {
      activeFontSizeOptionInputId,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerationMeme}>
        <Label htmlFor="imgUrl">Image URL</Label>
        <Input
          id="imgUrl"
          type="text"
          value={backgroundImageInput}
          onChange={this.onChangeImage}
          placeholder="Enter the Image URL"
        />
        <Label htmlFor="topText">Top Text</Label>
        <Input
          id="topText"
          type="text"
          value={topTextInput}
          onChange={this.onChangeText}
          placeholder="Enter the Top Text"
        />
        <Label htmlFor="topText">Bottom Text</Label>
        <Input
          id="bottomtext"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <Label htmlFor="select">Font Size</Label>
        <Select
          id="select"
          value={activeFontSizeOptionInputId}
          onChange={this.onChangeSelect}
        >
          {fontSizesOptionsList.map(eachOption => (
            <Option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </Option>
          ))}
        </Select>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSizeId} =
      this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGenerartorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemoContainer>
            {this.renderMeme()}
            {this.renderMemeGenerationForm()}
          </FormAndMemoContainer>
        </MemeGenerartorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
