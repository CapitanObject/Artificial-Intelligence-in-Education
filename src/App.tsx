import React, { useState, useRef } from 'react';
import { 
  Brain, 
  BookOpen, 
  Lightbulb, 
  Users,
  Users2,
  LineChart as ChartLineUp, 
  Notebook as Robot, 
  X, 
  MessageCircle, 
  Clock, 
  Target, 
  Sparkles, 
  BarChart, 
  TrendingUp, 
  Award, 
  PieChart, 
  UserPlus, 
  Share2, 
  Presentation, 
  Puzzle, 
  FileText, 
  Zap, 
  BookCheck, 
  Layers, 
  CheckCircle, 
  AlertCircle, 
  Timer, 
  BarChart3, 
  Mail, 
  Phone, 
  Building, 
  ArrowRight, 
  Settings, 
  UserCheck, 
  Gauge, 
  UsersRound, 
  MessageSquare, 
  Target as TargetIcon, 
  BookMarked, 
  GitBranch, 
  Workflow,
  Megaphone,
  Rocket,
  Network,
  Handshake,
  UserCircle2,
  Code,
  Database,
  Cpu,
  BookText,
  BrainCircuit,
  Wand2
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description, onClick }: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  onClick?: () => void 
}) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {onClick && (
        <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700">
          Подробнее →
        </button>
      )}
    </div>
  );
}

function Modal({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <button
            onClick={onClose}
            className="float-right text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

function PersonalizedLearningModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Персонализированное обучение с ИИ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="AI Personalized Learning"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Индивидуальный подход</h3>
                <p className="text-gray-600">Адаптация темпа и стиля обучения под каждого ученика</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Sparkles className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Умные рекомендации</h3>
                <p className="text-gray-600">ИИ предлагает оптимальные материалы и задания</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <BarChart className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Анализ прогресса</h3>
                <p className="text-gray-600">Постоянное отслеживание успеваемости и корректировка программы</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Как это работает?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Оценка уровня</h4>
              </div>
              <p className="text-gray-600">ИИ анализирует текущий уровень знаний и определяет оптимальную точку старта</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Адаптация контента</h4>
              </div>
              <p className="text-gray-600">Материалы подстраиваются под ваш стиль обучения и темп усвоения</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <PieChart className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Анализ результатов</h4>
              </div>
              <p className="text-gray-600">Постоянная оценка прогресса и корректировка программы обучения</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Преимущества персонализированного обучения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <UserPlus className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Повышение вовлеченности учащихся</p>
            </div>
            <div className="flex items-start space-x-3">
              <Share2 className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Улучшение усвоения материала</p>
            </div>
            <div className="flex items-start space-x-3">
              <Presentation className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Эффективное использование времени</p>
            </div>
            <div className="flex items-start space-x-3">
              <Puzzle className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Развитие индивидуальных способностей</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Начните персонализированное обучение сегодня</h3>
          <p className="text-gray-600 mb-4">Откройте новые возможности в образовании с помощью искусственного интеллекта</p>
          <button
            onClick={() => {
              onClose();
              // Here you can add additional logic to handle the registration
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </Modal>
  );
}

function MentoringModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Интеллектуальное наставничество с ИИ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="AI Mentoring"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Мгновенная обратная связь</h3>
                <p className="text-gray-600">Получайте ответы на вопросы и рекомендации в режиме реального времени</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Доступность 24/7</h3>
                <p className="text-gray-600">Поддержка и обучение в любое удобное время</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Целевое развитие</h3>
                <p className="text-gray-600">Фокус на ваших индивидуальных целях обучения</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Возможности ИИ-наставника</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Проверка заданий</h4>
              </div>
              <p className="text-gray-600">Мгновенная проверка работ с детальными комментариями и рекомендациями</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Интерактивные сессии</h4>
              </div>
              <p className="text-gray-600">Живой диалог с ИИ для разбора сложных тем и концепций</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <BookCheck className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Адаптивные материалы</h4>
              </div>
              <p className="text-gray-600">Подбор дополнительных материалов на основе ваших интересов</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Преимущества ИИ-наставничества</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Layers className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Многоуровневая система поддержки обучения</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Постоянное улучшение качества обучения</p>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Раннее выявление проблемных областей</p>
            </div>
            <div className="flex items-start space-x-3">
              <Timer className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Оптимизация времени обучения</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Начните обучение с ИИ-наставником</h3>
          <p className="text-gray-600 mb-4">Получите персонального ИИ-наставника, который поможет достичь ваших образовательных целей</p>
          <button
            onClick={() => {
              onClose();
              // Here you can add additional logic to handle the registration
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Начать бесплатно
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ProgressTrackingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Отслеживание прогресса обучения</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Progress Tracking"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <BarChart3 className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Детальная аналитика</h3>
                <p className="text-gray-600">Подробный анализ успеваемости и прогресса в обучении</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Settings className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Настраиваемые отчеты</h3>
                <p className="text-gray-600">Создание персонализированных отчетов по различным параметрам</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <UserCheck className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Индивидуальный прогресс</h3>
                <p className="text-gray-600">Отслеживание личных достижений и целей обучения</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Инструменты аналитики</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Gauge className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Показатели успеваемости</h4>
              </div>
              <p className="text-gray-600">Мониторинг ключевых показателей успеваемости в реальном времени</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <UsersRound className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Сравнительный анализ</h4>
              </div>
              <p className="text-gray-600">Сравнение результатов с общими показателями группы</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Рекомендации</h4>
              </div>
              <p className="text-gray-600">Персонализированные советы по улучшению результатов</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Ключевые возможности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <TargetIcon className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Постановка и отслеживание целей обучения</p>
            </div>
            <div className="flex items-start space-x-3">
              <BookMarked className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Учет выполненных заданий и тестов</p>
            </div>
            <div className="flex items-start space-x-3">
              <GitBranch className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Отслеживание развития навыков</p>
            </div>
            <div className="flex items-start space-x-3">
              <Workflow className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Анализ траектории обучения</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Начните отслеживать свой прогресс</h3>
          <p className="text-gray-600 mb-4">Получите доступ к продвинутым инструментам аналитики и улучшите свои результаты</p>
          <button
            onClick={() => {
              onClose();
              // Here you can add additional logic to handle the registration
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Попробовать сейчас
          </button>
        </div>
      </div>
    </Modal>
  );
}

function CollaborativeLearningModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Совместное обучение с ИИ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Collaborative Learning"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Групповое взаимодействие</h3>
                <p className="text-gray-600">ИИ помогает организовать эффективную работу в группах</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Умные дискуссии</h3>
                <p className="text-gray-600">Модерация и поддержка продуктивных обсуждений</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Совместные проекты</h3>
                <p className="text-gray-600">Координация и управление групповыми заданиями</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Преимущества совместного обучения</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Users2 className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Командная работа</h4>
              </div>
              <p className="text-gray-600">Развитие навыков сотрудничества и коммуникации</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Megaphone className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Обмен знаниями</h4>
              </div>
              <p className="text-gray-600">Взаимное обучение и обмен опытом</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Rocket className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Ускоренное развитие</h4>
              </div>
              <p className="text-gray-600">Быстрое освоение материала через взаимодействие</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Возможности платформы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Network className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Создание учебных групп по интересам</p>
            </div>
            <div className="flex items-start space-x-3">
              <Handshake className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Организация совместных проектов</p>
            </div>
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Групповые обсуждения и консультации</p>
            </div>
            <div className="flex items-start space-x-3">
              <UserCircle2 className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Система наставничества</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Присоединяйтесь к сообществу</h3>
          <p className="text-gray-600 mb-4">Начните учиться вместе с единомышленниками и достигайте большего</p>
          <button
            onClick={() => {
              onClose();
              // Here you can add additional logic to handle the registration
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Присоединиться сейчас
          </button>
        </div>
      </div>
    </Modal>
  );
}

function SmartContentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Создание умного контента с ИИ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx waG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Smart Content Creation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <BrainCircuit className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Интеллектуальная генерация</h3>
                <p className="text-gray-600">Автоматическое создание учебных материалов с учетом программы</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Wand2 className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Адаптивный контент</h3>
                <p className="text-gray-600">Материалы, подстраивающиеся под уровень и стиль обучения</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <BookText className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Интерактивные элементы</h3>
                <p className="text-gray-600">Вовлекающие упражнения и задания для лучшего усвоения</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Технологии создания контента</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Code className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Умные алгоритмы</h4>
              </div>
              <p className="text-gray-600">Использование передовых алгоритмов для создания качественного контента</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Database className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Большие данные</h4>
              </div>
              <p className="text-gray-600">Анализ огромных массивов образовательных данных</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Cpu className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Нейросети</h4>
              </div>
              <p className="text-gray-600">Применение нейронных сетей для персонализации контента</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Преимущества умного контента</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Точное соответствие учебной программе</p>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Экономия времени на подготовку материалов</p>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Индивидуальный подход к каждому ученику</p>
            </div>
            <div className="flex items-start space-x-3">
              <ChartLineUp className="w-5 h-5 text-indigo-600 mt-1" />
              <p className="text-gray-600">Постоянное улучшение качества материалов</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Начните создавать умный контент</h3>
          <p className="text-gray-600 mb-4">Используйте силу искусственного интеллекта для создания эффективных учебных материалов</p>
          <button
            onClick={() => {
              onClose();
              // Here you can add additional logic to handle the registration
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </Modal>
  );
}

function App() {
  const [isPersonalizedLearningModalOpen, setIsPersonalizedLearningModalOpen] = useState(false);
  const [isMentoringModalOpen, setIsMentoringModalOpen] = useState(false);
  const [isProgressTrackingModalOpen, setIsProgressTrackingModalOpen] = useState(false);
  const [isCollaborativeLearningModalOpen, setIsCollaborativeLearningModalOpen] = useState(false);
  const [isSmartContentModalOpen, setIsSmartContentModalOpen] = useState(false);
  const [isAutomatedAssessmentModalOpen, setIsAutomatedAssessmentModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const featuresRef = useRef<HTMLElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Искусственный интеллект в образовании</h1>
            <p className="text-xl mb-8">Трансформация будущего обучения с помощью искусственного интеллекта</p>
            <button 
              onClick={scrollToFeatures}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105 active:scale-95 duration-200"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Как ИИ трансформирует образование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="Персонализированное обучение"
              description="ИИ адаптируется к темпу и стилю обучения каждого ученика, обеспечивая индивидуальный подход."
              onClick={() => setIsPersonalizedLearningModalOpen(true)}
            />
            <FeatureCard 
              icon={Robot}
              title="Интеллектуальное наставничество"
              description="ИИ-репетиторы предоставляют мгновенную обратную связь и поддержку ученикам 24/7."
              onClick={() => setIsMentoringModalOpen(true)}
            />
            <FeatureCard 
              icon={ChartLineUp}
              title="Отслеживание прогресса"
              description="Продвинутая аналитика помогает контролировать успеваемость и выявлять области для улучшения."
              onClick={() => setIsProgressTrackingModalOpen(true)}
            />
            <FeatureCard 
              icon={Users}
              title="Совместное обучение"
              description="ИИ способствует групповому обучению, объединяя учеников со схожими целями обучения."
              onClick={() => setIsCollaborativeLearningModalOpen(true)}
            />
            <FeatureCard 
              icon={Lightbulb}
              title="Создание умного контента"
              description="ИИ генерирует и курирует образовательный контент, адаптированный под учебную программу."
              onClick={() => setIsSmartContentModalOpen(true)}
            />
            <FeatureCard 
              icon={BookOpen}
              title="Автоматизированная оценка"
              description="Эффективные системы оценивания и проверки, экономящие время преподавателей."
              onClick={() => setIsAutomatedAssessmentModalOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Готовы начать свое образовательное путешествие?
          </h2>
          <button
            onClick={() => setIsRegistrationModalOpen(true)}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95 duration-200"
          >
            Начать с нами
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">О нас</h3>
              <p className="text-gray-400">
                Мы создаем будущее образования с помощью искусственного интеллекта, делая обучение более эффективным и доступным для каждого.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  molli_79@mail.ru
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +7 (701) 523-87-43
                </li>
                <li className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Шахтинск, Малютина С.Р.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    О платформе
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Связаться с нами
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Подписаться</h3>
              <p className="text-gray-400 mb-4">
                Получайте новости и обновления платформы
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Education. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PersonalizedLearningModal 
        isOpen={isPersonalizedLearningModalOpen} 
        onClose={() => setIsPersonalizedLearningModalOpen(false)} 
      />
      <MentoringModal 
        isOpen={isMentoringModalOpen} 
        onClose={() => setIsMentoringModalOpen(false)} 
      />
      <ProgressTrackingModal 
        isOpen={isProgressTrackingModalOpen} 
        onClose={() => setIsProgressTrackingModalOpen(false)} 
      />
      <CollaborativeLearningModal
        isOpen={isCollaborativeLearningModalOpen}
        onClose={() => setIsCollaborativeLearningModalOpen(false)}
      />
      <SmartContentModal
        isOpen={isSmartContentModalOpen}
        onClose={() => setIsSmartContentModalOpen(false)}
      />

      {/* Registration Modal */}
      <Modal isOpen={isRegistrationModalOpen} onClose={() => setIsRegistrationModalOpen(false)}>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Начните использовать ИИ в образовании</h2>
          
          <p className="text-lg text-gray-700">
            Заполните форму ниже, и наш специалист свяжется с вами для обсуждения внедрения ИИ в вашем образовательном учреждении.
          </p>

          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            setIsRegistrationModalOpen(false);
            alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
          }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Имя и фамилия
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Иван Иванов"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Телефон
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="+7 (999) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Название организации
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="organization"
                    required
                    className="block w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Название вашей организации"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Дополнительная информация
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Расскажите о ваших потребностях и целях внедрения ИИ"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsRegistrationModalOpen(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;