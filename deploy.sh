#!/bin/bash

# Script para fazer deploy na Vercel
# Este script vai: 1. Criar um repositório GitHub, 2. Fazer push, 3. Fazer deploy na Vercel

echo "========================================="
echo "  Factorio Blog - Deploy na Vercel"
echo "========================================="
echo ""

# Verificar se git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Por favor, instale git primeiro."
    exit 1
fi

# Pedir credenciais do usuário
echo "📝 Para continuar, você precisa de:"
echo "  1. Uma conta GitHub"
echo "  2. Uma conta Vercel (pode usar GitHub)"
echo ""

read -p "Digite seu usuário GitHub: " GITHUB_USER
read -p "Digite o nome do repositório (ex: factorio-blog): " REPO_NAME

echo ""
echo "🔗 Configurando repositório remoto..."

# Adicionar origin remoto
git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git" 2>/dev/null

# Fazer push
git branch -M main
echo "⏳ Fazendo push para GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push realizado com sucesso!"
    echo ""
    echo "📱 Próximos passos:"
    echo "  1. Acesse https://vercel.com"
    echo "  2. Faça login com GitHub"
    echo "  3. Clique em 'Add New' > 'Project'"
    echo "  4. Selecione o repositório '${REPO_NAME}'"
    echo "  5. Clique em 'Deploy'"
    echo ""
    echo "🎉 Seu site estará disponível em: https://${REPO_NAME}.vercel.app"
else
    echo ""
    echo "❌ Erro ao fazer push. Verifique suas credenciais do GitHub."
    echo "💡 Dica: Use um Personal Access Token em vez de senha"
fi
