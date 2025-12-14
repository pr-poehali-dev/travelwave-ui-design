import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    people: '2',
  });

  const destinations = [
    {
      name: 'Таиланд',
      description: 'Райские пляжи и древние храмы',
      price: '45 000',
      image: '🏝️',
    },
    {
      name: 'Италия',
      description: 'Искусство, история и кулинария',
      price: '65 000',
      image: '🇮🇹',
    },
    {
      name: 'ОАЭ',
      description: 'Роскошь и футуристичная архитектура',
      price: '55 000',
      image: '🏙️',
    },
    {
      name: 'Мальдивы',
      description: 'Тропический рай для двоих',
      price: '120 000',
      image: '🌴',
    },
  ];

  const hotTours = [
    {
      name: 'Турция, Анталия',
      dates: '15-25 января',
      type: 'Всё включено',
      price: '35 000',
      discount: '-40%',
    },
    {
      name: 'Египет, Шарм-эль-Шейх',
      dates: '20-30 января',
      type: 'Завтраки',
      price: '42 000',
      discount: '-35%',
    },
    {
      name: 'Греция, Крит',
      dates: '10-20 февраля',
      type: 'Полупансион',
      price: '48 000',
      discount: '-30%',
    },
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Честные цены',
      description: 'Никаких скрытых платежей',
    },
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Туры под ваши предпочтения',
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи в любой точке мира',
    },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Отличный сервис! Организовали нам медовый месяц на Мальдивах. Всё было идеально!',
      rating: 5,
    },
    {
      name: 'Михаил Сидоров',
      text: 'Постоянно летаем через TravelWave. Цены лучшие, поддержка на высоте.',
      rating: 5,
    },
    {
      name: 'Ксения Морозова',
      text: 'Быстрый подбор тура, понятный сайт, всё прозрачно. Рекомендую!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">✈️</span>
            <h1 className="text-2xl font-bold gradient-text">TravelWave</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
            <a href="#hot" className="hover:text-primary transition-colors">Горящие туры</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="gradient-primary text-white hover:opacity-90">
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Открой новые страны вместе с TravelWave
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Более 10 лет создаём путешествия, которые вдохновляют
            </p>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl animate-fade-in">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Направление</label>
                  <Input
                    placeholder="Куда хотите поехать?"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Дата выезда</label>
                  <Input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Человек</label>
                  <Input
                    type="number"
                    value={searchData.people}
                    onChange={(e) => setSearchData({ ...searchData, people: e.target.value })}
                    className="h-12"
                    min="1"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full h-12 gradient-secondary text-white hover:opacity-90 font-semibold">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти тур
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tours" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Популярные направления</h2>
            <p className="text-gray-600 text-lg">Выбирайте из самых востребованных туров</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer overflow-hidden group">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                    {dest.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                    <p className="text-gray-600 mb-4">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">от {dest.price} ₽</span>
                      <Icon name="ArrowRight" className="text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hot" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="gradient-secondary text-white mb-4 px-4 py-1">
              <Icon name="Flame" size={16} className="mr-1" />
              Горящие предложения
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Успей забронировать!</h2>
            <p className="text-gray-600 text-lg">Ограниченное количество мест по специальным ценам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hotTours.map((tour, idx) => (
              <Card key={idx} className="hover-scale relative overflow-hidden">
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  {tour.discount}
                </Badge>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Icon name="Calendar" size={16} />
                      {tour.dates}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="UtensilsCrossed" size={16} />
                      {tour.type}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">за человека</span>
                        <div className="text-2xl font-bold text-primary">{tour.price} ₽</div>
                      </div>
                      <Button className="gradient-primary text-white">
                        Забронировать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-gray-600 text-lg">10 лет опыта и тысячи счастливых путешественников</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 text-lg">Узнайте, что говорят о нас путешественники</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Получите персональный подбор тура
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Расскажите о своих предпочтениях, и мы подберём идеальное путешествие
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с менеджером
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">✈️</span>
                <h3 className="text-xl font-bold">TravelWave</h3>
              </div>
              <p className="text-gray-400">
                Создаём путешествия, которые вдохновляют
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наши ценности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Все туры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Горящие туры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Премиум</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@travelwave.ru
                </li>
                <li className="flex gap-3 mt-4">
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    WhatsApp
                  </Button>
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    Telegram
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 TravelWave. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
