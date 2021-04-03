let shch = {}
shch.Slider = {
    Current: 0,
    Item: document.querySelectorAll('.emotions__item'),
    Length: document.querySelectorAll('.emotions__item').length,
    Plus: function () {
        if (shch.static.Slider.Current === (shch.static.Slider.Length - 1)) {
            return true;
        } else {
            shch.static.Slider.Item[shch.static.Slider.Current].setAttribute('style', 'display:none')
            shch.static.Slider.Current += 1;
            shch.static.Slider.Item[shch.static.Slider.Current].setAttribute('style', 'display:block')
        }
        console.log(shch.static.Slider.Current)
    },
}