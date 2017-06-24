import StyleHelper from './StyleHelper';

it('renders the correct text when no enthusiasm level is given', () => {
  const style = {
    width: '100%',
    height: '200px',
    color: 'red',
  };

  const styleText = StyleHelper.toString(style);
  
  // console.log(`styleText: ${styleText}`);
  expect(styleText).toEqual('width:100%;height:200px;color:red');
});