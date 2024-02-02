import { v4 as uuidv4 } from 'uuid';

const content_placesMondlan = [
  {
    title: '№1 Лез Уш - приют Миаж',
    info_places: 'Путешествие начинается в Лез Уш, откуда можно подняться на Бельвю по канатной дороге или пешком. Путь открывает потрясающие виды на ледник Бионнассе и ведет к гималайскому подвесному мосту. После переправы тропа поднимается к Col du Tricot, а затем спускается к Refuge Miage, расположенному в долине Miage.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/View-of-Mont-Blanc-from-Charousse-Les-Houches-1024x683.jpg',
    info_img: 'Вид на Монблан из Шарус-ле-Уш',
    id: uuidv4(),
  },
  {
    title: '№2 Refuge Miage - Refuge de la Croix du Bonhomme',
    info_places: 'От Refuge Miage тропа поднимается над Auberge du Truc, а затем спускается в курортный поселок Les Contamines. Прогулка вдоль реки или поездка на шаттле приводит к Нотр-Дам-де-ла-Горж.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/4a/4a/47/img-20190901-111014-largejpg.jpg?w=700&h=-1&s=1',
    info_img: 'Вид Auberge du Truc',
    id: uuidv4(),
  },
  {
    title: '№3 Refuge de la Croix du Bonhomme - Rifugio Elisabetta',
    info_places: 'День начинается со спуска в долину к Лез Шапье, за которым следует устойчивый подъем к Лез Мотте. Затем тропа поднимается к Col de la Siegne, обозначающему границу между Францией и Италией. Спуск открывает панорамные виды на ледниковый Валле Ли Бланш и массив Монблана с итальянской стороны и завершается в Rifugio Elisabetta.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/Narrow-path-from-Croix-du-Bonhomme-to-Refuge-des-Mottets-and-Elisabetta-1024x683.jpg',
    info_img: 'Узкая тропа от Круа дю Бонгом до Приюта де Моттес и Элизабетты',
    id: uuidv4(),
  },
  {
    title: '№4 Рифуджио Элизабетта - Курмайор',
    info_places: 'Если выбрать живописный путь справа от долины, то перед туристами открываются великолепные виды на Монте-Бьянко, простирающиеся до вершины Коль-де-ла-Сигне. Затем тропа спускается к горнолыжным склонам Мезон Вьель, после чего следует крутой спуск в Курмайор, итальянский аналог Шамони. Если ваши ноги устали после долгой прогулки, то здесь есть канатная дорога',
    img: 'https://toursdumontblanc.com/wp-content/uploads/rifugio_elisabetta-1024x768.jpeg',
    info_img: 'Убежище Rifugio Elisabetta',
    id: uuidv4(),
  },
  {
    title: '№5 Курмайор - Шале Валь Ферре',
    info_places: 'Rifugio Bertone. Здесь перед туристами встает выбор: классический маршрут TMB по северному флангу гор или более сложный, но живописный маршрут по горному хребту через Мон-де-ла-Сакс. Оба маршрута сходятся у Rifugio Bonatti, после чего следует спуск в долину к Chalet Val Ferret.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/The-Grand-Jorasses-massif-from-Val-Ferret-valley.webp',
    info_img: 'Массив Гран-Жорасс из долины Валь-Ферре',
    id: uuidv4(),
  },
  {
    title: '№6 Шале Валь Ферре - Ла Фули',
    info_places: 'Тропа поднимается к вершине Гранд-Коль-Ферре, обозначающей въезд в Швейцарию. Ландшафт меняется по мере спуска в долину Ферре и заканчивается в деревне Ла-Фули.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/The-village-of-La-Fouly-in-the-Val-Ferret-1024x683.jpg',
    info_img: 'Деревня Ла-Фули в Валь-Ферре',
    id: uuidv4(),
  },
  {
    title: '№7 Ла Фули - Шампекс-Лакс',
    info_places: 'Этот этап представляет собой пологий траверс по долине, мимо зеленых лугов и альпийских деревень, завершающийся в живописном озерном городке Шампекс-Лак.',
    img: 'https://cdn.loisirs.ch/media/cache/default_landscape/default/0001/35/34640_default_landscape.jpg',
    info_img: 'Альпийское горное озеро Champex Lac',
    id: uuidv4(),
  },
  {
    title: '№8 Шампекс-Лак - Триент',
    info_places: "Покинув спокойную долину, тропа поднимается на гору Коль-де-ла-Форклаз, откуда открывается захватывающий вид на долину Роны. Альтернативный маршрут пересекает Фенетр-д'Арпетт - более сложный, но живописный вариант. Оба маршрута спускаются к швейцарской деревне Триент.",
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Trient_%28river%29.jpg',
    info_img: 'Ущелье реки Триент',
    id: uuidv4(),
  },
  {
    title: '№9 Триент - Тре-ле-Шамп',
    info_places: 'На подъеме на Коль дю Бальме вдали виднеется долина Шамони - знак того, что маршрут близок к завершению. Тропа продолжает движение по территории Франции, поднимаясь на Коль-де-Позетт и его одноименный хребет, с которого открываются потрясающие виды на массив. Спуск приводит тропу в Тре-ле-Шамп.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/Col-de-Balme-Border-of-Switzerland-and-France-1024x768.jpg',
    info_img: 'Коль де Бальме Граница Швейцарии и Франции',
    id: uuidv4(),
  },
  {
    title: '№10 Тре-ле-Шамп - Ла Флежер',
    info_places: 'Тропа ведет к легендарным лестницам, после чего можно попасть в национальный парк Aiguille Rouge, где обитает огромное количество диких животных. На перекрестке можно подняться к Лак Блан или пройти по живописному маршруту через Гранд Балкон Суд к приюту Ла Флежер.',
    img: 'https://toursdumontblanc.com/wp-content/uploads/view-of-the-flegere-hut-from-the-grand-balcon-sud.jpg',
    info_img: ' ',
    id: uuidv4(),
  },
  {
    title: '№11 Ла Флежер - Лез Уш',
    info_places: 'Последняя часть тропы продолжается вдоль Balcon Sud до Le Brévent, где можно воспользоваться канатной дорогой или подняться на вершину. В любом случае вас ждут захватывающие виды на Монблан. Затем тропа спускается к Refuge du Bellachat, после чего следует длинный спуск к Les Houches, завершающий путешествие.',
    img: 'https://static.seetheworld.com/image_uploader/photos/12/original/bellachat-refuge-2152m-massif-du-mont-blanc-exterior-chalet.jpg',
    info_img: 'Вид Refuge du Bellachat',
    id: uuidv4(),
  },
];

export default content_placesMondlan;
