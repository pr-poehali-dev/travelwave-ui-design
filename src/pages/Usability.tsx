import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

type CaseCategory = 'navigation' | 'forms' | 'visual' | 'all';

interface UXCase {
  id: number;
  site: string;
  category: CaseCategory;
  problem: string;
  description: string;
  solution: string;
  impact: string;
  imageEmoji: string;
  severity: 'critical' | 'major' | 'minor';
}

const Usability = () => {
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory>('all');

  const uxCases: UXCase[] = [
    {
      id: 1,
      site: 'Apple.com',
      category: 'navigation',
      problem: 'Скрытая навигация в разделе "Сравнение продуктов"',
      description: 'На странице сравнения iPhone пользователь не может быстро вернуться к списку моделей. Кнопка "Назад" находится в самом верху страницы мелким шрифтом, а при прокрутке вниз — исчезает. Пользователь вынужден скроллить 2-3 экрана вверх, чтобы изменить выбор.',
      solution: 'Добавить плавающую панель навигации (sticky header) с кнопкой "Изменить выбор" и текущими выбранными моделями. Разместить дублирующую кнопку внизу страницы сравнения.',
      impact: 'Снижение отказов на 25%, ускорение процесса выбора в 2 раза',
      imageEmoji: '📱',
      severity: 'major',
    },
    {
      id: 2,
      site: 'Airbnb',
      category: 'forms',
      problem: 'Форма поиска с неочевидными фильтрами',
      description: 'При выборе дат в календаре бронирования, пользователь не видит итоговую стоимость до применения фильтров. Кнопка "Применить фильтры" находится внизу длинного списка опций, а цена обновляется только после клика. В результате пользователи открывают 5-7 объявлений, прежде чем понимают реальную стоимость с учетом сборов.',
      solution: 'Показывать динамический расчет стоимости в sticky-футере формы фильтров. Обновлять цену в реальном времени при изменении любого параметра. Добавить краткую сводку выбранных фильтров в шапке результатов.',
      impact: 'Увеличение конверсии бронирований на 18%, сокращение времени поиска на 40%',
      imageEmoji: '🏠',
      severity: 'critical',
    },
    {
      id: 3,
      site: 'Medium.com',
      category: 'visual',
      problem: 'Навязчивые модальные окна при чтении',
      description: 'Через 30 секунд чтения статьи появляется модальное окно с предложением подписаться, полностью блокируя контент. У пользователя нет кнопки "Закрыть" — только "Sign up" или маленький крестик в углу (6px × 6px на мобильных). При закрытии модалка появляется снова через минуту.',
      solution: 'Перенести призыв к подписке в нативный баннер внизу экрана или между абзацами статьи. Показывать модалку только при скролле к концу статьи (80% прочитано). Добавить четкую кнопку "Продолжить чтение" и запоминать выбор пользователя на сессию.',
      impact: 'Снижение показателя отказов на 35%, рост времени на сайте с 1.2 до 3.8 минут',
      imageEmoji: '📰',
      severity: 'critical',
    },
    {
      id: 4,
      site: 'Booking.com',
      category: 'visual',
      problem: 'Искусственное создание срочности через fake-таймеры',
      description: 'Красные баджи "Осталось 1 номер!" и таймер "Забронируйте в течение 15 минут" создают давление, но обновляются при каждом посещении страницы. Пользователи теряют доверие, когда замечают, что "последний номер" доступен уже неделю, а таймер каждый раз сбрасывается.',
      solution: 'Показывать реальные данные о доступности (например, "Забронировано 12 раз за последние 24 часа"). Использовать социальное доказательство вместо паники ("137 человек просматривают этот отель"). Убрать fake-таймеры полностью или показывать только для действительно заканчивающихся спецпредложений.',
      impact: 'Рост доверия к платформе, увеличение повторных бронирований на 22%',
      imageEmoji: '🏨',
      severity: 'major',
    },
  ];

  const filteredCases = selectedCategory === 'all' 
    ? uxCases 
    : uxCases.filter(c => c.category === selectedCategory);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'major': return 'bg-orange-500';
      case 'minor': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical': return 'Критично';
      case 'major': return 'Важно';
      case 'minor': return 'Незначительно';
      default: return severity;
    }
  };

  const categories = [
    { value: 'all', label: 'Все кейсы', icon: 'LayoutGrid' },
    { value: 'navigation', label: 'Навигация', icon: 'Compass' },
    { value: 'forms', label: 'Формы', icon: 'FileText' },
    { value: 'visual', label: 'Визуал', icon: 'Eye' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-text mb-2">Юзабилити</h1>
              <p className="text-gray-600">Разбор UX-ошибок в популярных интерфейсах</p>
            </div>
            <Button className="gradient-primary text-white">
              <Icon name="Home" size={18} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">О проекте</h2>
                  <p className="text-gray-700 mb-4">
                    Даже самые красивые и известные сайты могут иметь серьёзные UX-проблемы. 
                    В этой коллекции разобраны реальные примеры неудобных интерфейсов с предложениями решений.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Search" size={16} className="text-primary" />
                      <span>Найдено <strong>4 кейса</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} className="text-green-600" />
                      <span>Средний прирост конверсии: <strong>25%</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? 'default' : 'outline'}
                  className={selectedCategory === cat.value ? 'gradient-primary text-white' : ''}
                  onClick={() => setSelectedCategory(cat.value as CaseCategory)}
                >
                  <Icon name={cat.icon} size={18} className="mr-2" />
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCases.map((uxCase) => (
              <Card key={uxCase.id} className="hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center border-b">
                    <div className="text-8xl">{uxCase.imageEmoji}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{uxCase.site}</h3>
                      <Badge className={`${getSeverityColor(uxCase.severity)} text-white`}>
                        {getSeverityLabel(uxCase.severity)}
                      </Badge>
                    </div>

                    <Tabs defaultValue="problem" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-4">
                        <TabsTrigger value="problem" className="text-xs">
                          <Icon name="AlertTriangle" size={14} className="mr-1" />
                          Проблема
                        </TabsTrigger>
                        <TabsTrigger value="solution" className="text-xs">
                          <Icon name="Lightbulb" size={14} className="mr-1" />
                          Решение
                        </TabsTrigger>
                        <TabsTrigger value="impact" className="text-xs">
                          <Icon name="TrendingUp" size={14} className="mr-1" />
                          Эффект
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="problem" className="space-y-3">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                            <Icon name="XCircle" size={18} className="text-red-600" />
                            {uxCase.problem}
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {uxCase.description}
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="solution" className="space-y-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                            <Icon name="CheckCircle" size={18} className="text-green-600" />
                            Предлагаемое решение
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {uxCase.solution}
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="impact" className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <Icon name="BarChart3" size={18} className="text-blue-600" />
                            Ожидаемый результат
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {uxCase.impact}
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 pt-4 border-t">
                      <Badge variant="outline" className="mr-2">
                        {uxCase.category === 'navigation' && '🧭 Навигация'}
                        {uxCase.category === 'forms' && '📝 Формы'}
                        {uxCase.category === 'visual' && '👁️ Визуал'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 border-none">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Главные принципы хорошего UX</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="Target" size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold">Очевидность</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Пользователь должен понимать, что делать, без инструкций
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 gradient-secondary rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold">Скорость</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Минимум кликов для достижения цели пользователя
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Heart" size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold">Доверие</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Честность с пользователем важнее конверсии
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 UX Case Studies. Создано для изучения юзабилити.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Usability;
