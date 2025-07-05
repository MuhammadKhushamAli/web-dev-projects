const next = document.getElementById('next');
const prev = document.getElementById('prev');
const image = document.getElementById('image');

const imageArray = ['https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e'
];
let index = 0;

// It Update Image on Screen
function imageUpdator(i)
{
    image.setAttribute('src', imageArray[i]);
    image.setAttribute('alt', `image ${i + 1}`);
}

// It manage index
function indexManager()
{
    if(index >= imageArray.length)
    {
        index = 0;
    }
    else if(index < 0)
    {
        index = imageArray.length - 1;
    }
}

setInterval(() => {
    imageUpdator(index);
    index++;
    indexManager();
}, 4000)

next.addEventListener('click',(event) => {
    index++;
    indexManager();
    imageUpdator(index);

}, false)

prev.addEventListener('click', () => {
    index--;
    indexManager();
    imageUpdator(index);
}, false)